import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component'
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InscriptComponent } from './pages/inscript/inscript.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import {AuthGuard} from './service/auth.guard'
import { TestComponent } from './pages/test/test.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AccesdeniedComponent } from './pages/accesdenied/accesdenied.component';


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
  },
  {
    path:'test',
    component:TestComponent,canActivate:[AuthGuard]
  },
  {
    path:'404',
    component:NotfoundComponent
  },
  {
    path:'403',
    component:AccesdeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  path:''
  
 }
