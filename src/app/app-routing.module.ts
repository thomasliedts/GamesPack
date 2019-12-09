import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component: AccueilComponent
  },
  {
    path:'jeux',
    component:JeuxComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  path:''
  
 }
