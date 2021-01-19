import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanDeactivateRoute } from 'src/app/shared/can-deactivate-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, CanDeactivateRoute {
  constructor() {}
  username: string;
  password: string;
  canLeave: boolean = false;
  @ViewChild('registerForm') registerForm: NgForm;

  ngOnInit(): void {}
  onSubmit() {
    this.canLeave = true;
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (
      this.registerForm.touched ||
      this.registerForm.dirty ||
      this.registerForm.submitted
    ) {
      if (!this.canLeave) {
        return confirm('Do you really want to leave this page?');
      }
    }
    return true;
  }
}
