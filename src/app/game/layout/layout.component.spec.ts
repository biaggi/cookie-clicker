import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { appReducers } from 'src/app/store/store'
import { ClickerComponent } from '../clicker/clicker.component'

import { LayoutComponent } from './layout.component'

describe('LayoutComponent', () => {
  let component: LayoutComponent
  let fixture: ComponentFixture<LayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, ClickerComponent],
      imports: [StoreModule.forRoot(appReducers), RouterModule]
    }).compileComponents()

    fixture = TestBed.createComponent(LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show quantity', () => {
    component.quantity = 5
    fixture.detectChanges()
    const element: HTMLHeadElement =
      fixture.debugElement.nativeElement.querySelector('main h1')
    expect(element.innerText).toBe('Patatas 5')
  })
})
