import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {Test} from '../model/test'
@Injectable({
  providedIn: 'root'
})
export class TestService {
  test={
    jeu:'',
    test:'',
    note:'',
    pseudo:''
  };

  creationForm= FormGroup;
  APIadress = 'http://localhost:4000/api/create-test';
  data: any;

  constructor(private httpClient: HttpClient) { }
  createTest(testPost:Test){
    console.log('test create');
    return this.httpClient.post<Test>(`${this.APIadress}users`,testPost)
  }
}
