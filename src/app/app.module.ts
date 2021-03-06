import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { StoreModule } from '@ngrx/store'
import { ReactiveFormsModule } from '@angular/forms'
import { appReducers } from './store/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { LayoutComponent } from './game/layout/layout.component'
import { AppRoutingModule } from './app-routing.module'
import { LoginComponent } from './login/login.component';
import { ClickerComponent } from './game/clicker/clicker.component';
import { PluralizePipe } from './pipes/pluralize.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    ClickerComponent,
    PluralizePipe
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    ReactiveFormsModule,

    StoreModule.forRoot(appReducers),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
