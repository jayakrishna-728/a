import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/status.reducer';
import { AdminComponent } from './admin/admin.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideStore(),
    provideState({name:'status' , reducer: reducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
