import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.scss']
})
export class PostTestComponent implements OnInit {
  
  creationForm:FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.creationForm = this.fb.group({
      jeu: [''],
      test: [''],
      note: [''],
      pseudo:['']
    })
   }

  ngOnInit() {
  }

  registerTest() {
    this.authService.testUp(this.creationForm.value).subscribe((res) => {
      if (res.result) {
        this.creationForm.reset()
        this.router.navigate(['test']);
      }
    })
  }
}
