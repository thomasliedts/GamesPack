import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { JeuxComponent } from './pages/jeux/jeux.component';


const routes: Routes = [
  {
    path:'',
    component: AccueilComponent
  },
  {
    path:'jeux',
    component:JeuxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  path:''
  
 }
