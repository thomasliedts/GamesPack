import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../service/auth.service'
import { FormBuilder, FormGroup, NgForm, FormControl } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser: Object = {};
  
  constructor(public authService: AuthService,private actRoute: ActivatedRoute,public router: Router) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
   }
 
  
  ngOnInit() {}
  updateForm= new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  onSubmit(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.updateUsers(this.updateForm.value,id).subscribe((res:any ) =>{
      if(res.result){
        this.updateForm.reset();
        this.router.navigate(["/"])
      }
    })
  }
}
