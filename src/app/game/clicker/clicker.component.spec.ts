import { ComponentFixture, TestBed } from '@angular/core/testing'
import { StoreModule } from '@ngrx/store'
import { appReducers } from 'src/app/store/store'

import { ClickerComponent } from './clicker.component'

describe('ClickerComponent', () => {
  let component: ClickerComponent
  let fixture: ComponentFixture<ClickerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickerComponent],
      imports: [StoreModule.forRoot(appReducers)]
    }).compileComponents()

    fixture = TestBed.createComponent(ClickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
