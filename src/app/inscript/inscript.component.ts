import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import{inscription} from '../model/user'
import { Observable } from 'rxjs';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.component.html',
  styleUrls: ['./inscript.component.scss']
})
export class InscriptComponent implements OnInit {
  inscription ={
    pseudo:'',
    email:'',
    password:'',
  };
  creationForm:FormGroup;
  constructor(private router: Router, private usersService: UsersService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormForUser();
  }
  createFormForUser() {
    this.creationForm = this.fb.group({
      name: '',
      email: '',
      password: '',
    });
  }
  CreateUserNew() {
    if (this.creationForm.valid) {
      console.log('good job', this.creationForm);
      this.usersService.createUser(this.creationForm.value).subscribe((data) => {
        console.log(data, 'User créer');
      });
    }
  }
}
