import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/store'

type GameDataIface = Array<{
  levelName: string
  levelData: Array<{
    title: string
    factor: number
    cost: number
    interval: number
  }>
}>

const gameDataConfiguration: GameDataIface = [
  {
    levelName: 'Patatas',
    levelData: [
      { title: 'granjero', factor: 1.15, cost: 1, interval: 5000 },
      { title: 'comuna', factor: 1.16, cost: 10, interval: 10000 },
      { title: 'camión', factor: 1.17, cost: 100, interval: 20000 },
      { title: 'plantación', factor: 1.18, cost: 1000, interval: 30000 },
      {
        title: 'riego',
        factor: 1.19,
        cost: 10000,
        interval: 40000
      },
      { title: 'invernadero', factor: 1.2, cost: 100000, interval: 50000 },
      { title: 'barcaza', factor: 1.21, cost: 1000000, interval: 60000 }
    ]
  }
]

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user!: string
  public level: number = 0
  public config: GameDataIface = gameDataConfiguration
  // patatas que tiene el usuario producidas en un momento dado
  public patatas: number = 0
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.user = user
    })
  }
}
