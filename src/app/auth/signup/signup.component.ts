import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   aa_maxDate;

  constructor(private authService22: AuthService) { }

  ngOnInit(): void {
    this.aa_maxDate = new Date();
    this.aa_maxDate.setFullYear(this.aa_maxDate.getFullYear() - 18);
  }


  onSubmit(form22: NgForm) {
   this.authService22.registerUser({
     email: form22.value.aa_email,
     password: form22.value.aa_password,
   });
  }

}
