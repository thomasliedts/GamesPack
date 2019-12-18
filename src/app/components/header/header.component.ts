import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(public authService: AuthService) { }
  currentUser: Object = {};
  lol = '';


  constructor(public authService: AuthService, private actRoute: ActivatedRoute, private router: Router) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    if (localStorage.getItem('id') && localStorage.getItem('id') !== "") {
      id = localStorage.getItem('id')
    }
    console.log("MAIS NON !!!!" + id)
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
      this.lol = res.msg._id
    })
  }

  // toGo() {
  //   this.router.navigate(["profil", this.lol])
  //   // [routerLink] = "['profil', currentUser.msg._id]"
  // }

  logout() {
    this.authService.doLogout()
  }

  ngOnInit() {
  }

}
