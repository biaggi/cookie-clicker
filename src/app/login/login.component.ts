import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '../store/store'
import { createUser } from '../store/user/user.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'cookies'
  public fg!: FormGroup

  constructor (
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.fg = this.fb.group({
      name: new FormControl('', Validators.required)
    })
  }

  submit () {
    if (this.fg.invalid) return
    this.store.dispatch(createUser({ name: this.fg.value.name }))
    this.router.navigate(['game'])
  }
}
