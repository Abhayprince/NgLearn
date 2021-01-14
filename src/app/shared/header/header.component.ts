import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/account/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerTitle = 'NgLearn';
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}
}
