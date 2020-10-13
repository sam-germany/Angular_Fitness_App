import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm22: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm22 = new FormGroup({
      email22: new FormControl('',{
        validators: [Validators.required, Validators.email]
      }),
      password22: new FormControl('',{
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.loginForm22);
  }

}
