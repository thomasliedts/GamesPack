import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {inscription} from './model/user'
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  user= {
    pseudo:'',
    email:'',
    
  };
  creationForm= FormGroup;
  APIadress = 'http://localhost:3300/';
  data: any;
  constructor(private httpClient: HttpClient) { }
  createUser(userPost:inscription){
    console.log('user create');
    console.log(userPost)
    return this.httpClient.post<inscription>(`${this.APIadress}users`,userPost)
  }
}
