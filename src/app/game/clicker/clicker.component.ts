import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/store'
import { Subscription, timer } from 'rxjs'
import * as resourceActions from 'src/app/store/resources/resources.actions'

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit, OnDestroy {
  //  { title: 'riego automatizado', factor: 1.19, cost: 10000, interval: 40000 },

  @Input() title: string = ''
  @Input() factor: number = 0
  @Input() cost: number = 0
  @Input() interval: number = 0
  @Input() owned: number = 1

  private subs: Subscription[] = []

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const source = timer(this.interval, this.interval)
    source.subscribe(() =>
      this.store.dispatch(
        resourceActions.produceResource({ quantity: this.owned })
      )
    )
  }

  ngOnDestroy(): void {}

  onIncrement() {
    //    this.owned = this.owned + 1
    //    this.baseCost = Math.ceil(this.baseCost * Math.pow(1.10, this.owned))
  }

  onUpgrade() {}
}
