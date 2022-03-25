import {Component} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
  }

  login(email:string, password: string){
    this.userService.login(email,password);

    const redirectUrl = this.activateRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
  }
}
