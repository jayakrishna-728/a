import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/status.reducer';
import { AdminComponent } from './admin/admin.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RxjsComponent,
    DynamicFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideStore(),
    provideState({name:'status' , reducer: reducer }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true  // Allows multiple interceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
