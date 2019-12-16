import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component'
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InscriptComponent } from './pages/inscript/inscript.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import {AuthGuard} from './service/auth.guard'


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
      
  },
  {
    path:'inscript',
    component:InscriptComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profil/:id',
    component:ProfilComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  path:''
  
 }
