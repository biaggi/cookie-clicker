import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/store'
import { timer } from 'rxjs'

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  //  { title: 'riego automatizado', factor: 1.19, cost: 10000, interval: 40000 },

  @Input() title: string = ''
  @Input() factor: number = 0
  @Input() cost: number = 0
  @Input() interval: number = 0
  @Input() owned: number = 0

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const source = timer(this.interval, this.interval)
    source.subscribe(() => console.log('test'))
  }

  onIncrement() {
    //    this.owned = this.owned + 1
    //    this.baseCost = Math.ceil(this.baseCost * Math.pow(1.10, this.owned))
  }

  onUpgrade() {}
}
