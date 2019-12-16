import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  logout() {
    this.authService.doLogout()
  }

  ngOnInit() {
  }

}
