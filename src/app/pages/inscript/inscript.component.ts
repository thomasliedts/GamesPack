import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.component.html',
  styleUrls: ['./inscript.component.scss']
})
export class InscriptComponent implements OnInit {
  
  creationForm:FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.creationForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit() {
    
  }
  
  registerUser() {
    this.authService.signUp(this.creationForm.value).subscribe((res) => {
      if (res.result) {
        this.creationForm.reset()
        this.router.navigate(['login']);
      }
    })
  }
}
