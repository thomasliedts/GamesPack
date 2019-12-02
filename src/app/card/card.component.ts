import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import {games} from '../model/games'
import {ApiRawgerService} from '../service/apiRawger.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() gamesData;
  
  data: any;

  gamesGetList$: Observable<games[]>;

  public gamesList: any;

  constructor(private ApiRawgerService:ApiRawgerService , private router: Router) {
    this.ApiRawgerService.getData().then(data =>{
      console.log(data);
      this.gamesList = data;
    });
   }

  ngOnInit() {
    this.gamesGetList$ = this.ApiRawgerService.getGames();
  }

}
