import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptComponent } from './inscript/inscript.component';


const routes: Routes = [
  {
    path:'inscript',
    component:InscriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
