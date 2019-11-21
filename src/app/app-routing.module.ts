import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptComponent } from './inscript/inscript.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'inscript',
    component:InscriptComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
