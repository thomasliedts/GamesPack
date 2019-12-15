import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {User} from '../model/user'
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  user= {
    name:'',
    email:'',
    password:'',
  };
  creationForm= FormGroup;
  APIadress = 'http://localhost:4000/api/register-user';
  data: any;
  constructor(private httpClient: HttpClient) { }
  createUser(userPost:User){
    console.log('user create');
    return this.httpClient.post<User>(`${this.APIadress}users`,userPost)
  }
}
