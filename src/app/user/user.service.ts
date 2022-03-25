import {Inject, Injectable} from '@angular/core';
import {IUser} from "../shared/interfaces";
import {LocalStorage} from "../core/injection-token";

@Injectable()
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try{
      const localStorageUser= this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    }catch (e){
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      email: email,
      firstName: 'John',
      lastName: 'Doe'
    }

    this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
}
