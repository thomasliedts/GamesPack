import { Component, OnInit } from '@angular/core';
import {TestService} from '../../service/test.service' 
import { from } from 'rxjs';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit {
  status: boolean = false;
  private tests: any[];
  constructor(private testService: TestService) { }

  ngOnInit() {
    console.log("On ng on init");
    this.testService.getTest().subscribe((res: any) => {
      console.log(res);
      this.tests = res;
    });
  }

}
