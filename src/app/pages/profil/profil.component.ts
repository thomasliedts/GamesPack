import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser: Object = {};

  constructor(public authService: AuthService,private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
   }

  ngOnInit() {
  }

}
