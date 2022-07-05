import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './game/layout/layout.component'
import { LoginComponent } from './login/login.component'
import { UserGuard } from './user.guard'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'game', component: LayoutComponent, canActivate: [UserGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
