import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from './profile/profile.component';
import {UserRoutingModule} from "./user-routing.module";
import {UserService} from "./user.service";


@NgModule({
  declarations:
    [
      RegisterComponent,
      LoginComponent,
      ProfileComponent,
    ],
  imports:
    [
      CommonModule,
      UserRoutingModule
    ],
  providers:
    [
      UserService
    ]
})
export class UserModule {
}
