import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InscriptComponent } from './inscript/inscript.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< src/app/app.module.ts
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    JeuxComponent,
    ContactComponent
=======
    InscriptComponent,
    LoginComponent,
>>>>>>> src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< src/app/app.module.ts
    HttpClientModule
=======
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
