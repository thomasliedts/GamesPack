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
import { JeuxComponent } from './pages/jeux/jeux.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InscriptComponent } from './pages/inscript/inscript.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    JeuxComponent,
    ContactComponent,
    InscriptComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
