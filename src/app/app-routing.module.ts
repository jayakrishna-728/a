import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'home', component:HomeComponent},
  {path :'admin' , component: AdminComponent},
  {path :'rxjs' , component: RxjsComponent},
  {path :'dynamicforms' , component: DynamicFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
