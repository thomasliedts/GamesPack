import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {games} from '../model/games'
@Injectable({
  providedIn: 'root'
})
export class ApiRawgerService {
  APIadress = 'http://localhost:3300/getData';
  data: any;
  constructor(private httpClient: HttpClient) { }

  getGames():Observable<games[]>{
    return this.httpClient.get<games[]>(`${this.APIadress}`)
  }

  getData(){
    return this.httpClient.get(`${this.APIadress}`).toPromise();
  }
}
