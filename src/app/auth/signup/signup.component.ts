import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   aa_maxDate;

  constructor() { }

  ngOnInit(): void {
    this.aa_maxDate = new Date();
    this.aa_maxDate.setFullYear(this.aa_maxDate.getFullYear() - 18);
  }


  onSubmit(form: NgForm) {
    console.log(form);
  }

}
