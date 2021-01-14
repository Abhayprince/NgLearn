import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginModel: LoginModel;

  @ViewChild('f') loginForm: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit: ', this.loginForm.valid);
    console.log(this.loginForm);

    this.loginModel = new LoginModel(
      this.username,
      this.password,
      this.loginForm.status
    );
  }
}
