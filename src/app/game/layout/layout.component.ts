import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/store'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user!: string
  constructor (private store: Store<AppState>) {}

  ngOnInit (): void {
    this.store.select('user').subscribe((user) => {
      this.user = user
    })
  }
}
