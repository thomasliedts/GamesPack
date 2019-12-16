import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  connecForm: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.connecForm = this.fb.group({
      email: [''],
      password: ['']
    })
   }

  ngOnInit() {
  }
  loginUser() {
    this.authService.signIn(this.connecForm.value)
  }
}
