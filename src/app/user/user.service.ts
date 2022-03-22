import {Injectable} from '@angular/core';
import {IUser} from "../shared/interfaces";

@Injectable()
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor() {
  }

  login(email: string, password: string): void {
    this.user = {
      email: email,
      firstName: 'John',
      lastName: 'Doe'
    }

  }

  logout(): void {
    this.user = undefined;
  }
}