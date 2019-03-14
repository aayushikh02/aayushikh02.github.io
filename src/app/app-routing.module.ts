import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:"Home",component:HomeComponent},
{path:"",pathMatch: 'full' ,redirectTo:'/Home'},
{path:"Form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
