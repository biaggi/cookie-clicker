import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { appReducers } from 'src/app/store/store'

import { LayoutComponent } from './layout.component'

describe('LayoutComponent', () => {
  let component: LayoutComponent
  let fixture: ComponentFixture<LayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [
        StoreModule.forRoot(appReducers),
        RouterModule
      ]

    }).compileComponents()

    fixture = TestBed.createComponent(LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
