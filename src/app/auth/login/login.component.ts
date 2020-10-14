import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm22: FormGroup;

  constructor(private authService: AuthService) { }

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
    this.authService.login({
      email: this.loginForm22.value.email22,
      password: this.loginForm22.value.password22
    });
  }

}
