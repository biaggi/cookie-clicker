import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, take } from 'rxjs'
import { AppState } from './store/store'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor (private store: Store<AppState>, private router: Router) {}

  canActivate (): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.store
        .select('user')
        .pipe(take(1))
        .subscribe((user) => {
          const isLoggedUser = !!user
          observer.next(!!user)
          observer.complete()
          if (!isLoggedUser) {
            this.router.navigate([''])
          }
        })
    })
  }
}
