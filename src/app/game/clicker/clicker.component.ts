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

  public upgradeCost: number = 100
  public level = 1

  private subs: Subscription[] = []
  private quantity: number = 0

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const source = timer(this.interval, this.interval)
    this.subs.push(
      source.subscribe(() =>
        this.store.dispatch(
          resourceActions.produceResource({ quantity: this.owned * this.level })
        )
      )
    )
    this.store
      .select('resources')
      .subscribe((resources) => (this.quantity = resources.quantity))
  }

  ngOnDestroy(): void {
    this.subs.every((s) => {
      s.unsubscribe()
      return true
    })
  }

  onIncrement() {
    if (this.quantity >= this.cost) {
      this.store.dispatch(
        resourceActions.consumeResource({ quantity: this.cost })
      )
      this.owned++
      this.cost = Math.ceil(this.cost * Math.pow(this.factor, this.owned))
    }
  }

  onUpgrade() {
    if (this.quantity >= this.upgradeCost) {
      this.store.dispatch(resourceActions.consumeResource({ quantity: 100 }))
      this.level++
      this.upgradeCost *= 10
    }
  }
}
