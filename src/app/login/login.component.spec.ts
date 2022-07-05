import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { appReducers } from '../store/store'
import { RouterTestingModule } from '@angular/router/testing'

import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers),
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should be marked as error if invalid'", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    fixture.detectChanges()
    component.fg.patchValue({ name: 'test' })
    fixture.detectChanges()
    component.fg.patchValue({ name: '' })
    fixture.detectChanges()
    const input =
      fixture.debugElement.nativeElement.querySelector('.is-invalid')
    expect(input).toBeDefined()
  })
})
