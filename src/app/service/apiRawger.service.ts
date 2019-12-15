import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {games} from '../model/games'
@Injectable({
  providedIn: 'root'
})
export class ApiRawgerService {
  APIadress = 'http://localhost:4000/api/getData';
  data: any;
  ApiAdress = 'http://localhost:4000/api/getDatas';
  datas: any;
  constructor(private httpClient: HttpClient) { }

  getGames():Observable<games[]>{
    return this.httpClient.get<games[]>(`${this.APIadress}`)
  }

  getData(){
    return this.httpClient.get(`${this.APIadress}`).toPromise();
  }
  getGame():Observable<games[]>{
    return this.httpClient.get<games[]>(`${this.ApiAdress}`)
  }

  getDatas(){
    return this.httpClient.get(`${this.ApiAdress}`).toPromise();
  }
}
