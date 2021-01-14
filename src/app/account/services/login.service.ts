import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private User: UserModel = null;
  private users: UserModel[];
  constructor() {
    this.users = [new UserModel(1, 'Abhay'), new UserModel(2, 'Prince')];
  }
  get CurrentUser(): UserModel {
    return this.User;
  }
  get IsLoggedIn(): boolean {
    return this.User !== null;
  }

  login(userName: string): boolean {
    const user = this.users.find(
      (u) => u.userName.toLowerCase() === userName.toLowerCase()
    );
    console.log('User: ', user);
    if (user) this.User = user;
    return Boolean(user);
  }
  logout() {
    this.User = null;
  }
}
