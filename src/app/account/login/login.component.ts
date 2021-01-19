import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  loginModel: LoginModel;
  loginError: string;
  loginSuccess: string;
  private timeout: any;

  @ViewChild('f') loginForm: NgForm;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginModel = new LoginModel(
      this.username,
      this.password,
      this.loginForm.status
    );
    this.loginError = null;
    this.loginSuccess = null;
    if (!this.loginService.login(this.username)) {
      this.loginError = 'Invalid username';
    } else {
      this.loginSuccess =
        'Successfully logged-in. Will be redirected in 5 seconds';
      this.timeout = setTimeout(() => {
        this.router.navigate(['']);
      }, 5000);
    }
  }
  ngOnDestroy(): void {
    if (this.timeout) clearTimeout(this.timeout);
    console.log('Timeout Clear', this.timeout);
    this.timeout = null;
  }
}
