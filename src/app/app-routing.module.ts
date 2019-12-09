import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< src/app/app-routing.module.ts
import { AccueilComponent } from './pages/accueil/accueil.component';
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';
=======
import { InscriptComponent } from './inscript/inscript.component';
import { LoginComponent } from './login/login.component';
>>>>>>> src/app/app-routing.module.ts


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  path:''
  
 }
