import { Component } from '@angular/core';
import {LoginRequest} from "../../model";
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private loginService: LoginServiceService, private router:Router, private auth:AuthService) { }

  // handle error
  // <label *ngIf="error" class="error">{{error}}</label>


  login() {
    const loginRequest: LoginRequest = { email: this.username, password: this.password };

    this.loginService.login(loginRequest).subscribe(
      (response) => {
        // print what we get back
        // console.log('Login response:', response);
        console.log('Token:', response.jwt);
        localStorage.setItem('umToken', response.jwt);

        if (this.auth.userHasPermission('can_create_users')
        ||  this.auth.userHasPermission('can_update_users')
        ||  this.auth.userHasPermission('can_delete_users')
        ||  this.auth.userHasPermission('can_read_users')) {
          this.router.navigate(['users']);
        }else {
          alert("You do not have any permissions.");
        }
      },
      (error) => {
        this.error = "Login failed";
        console.error('Login failed:', error);

        //TODO For testing purposes, delete this line later
        // admin JWT:
        // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJwZXJtaXNzaW9ucyI6WyJjYW5fY3JlYXRlX3VzZXJzIiwiY2FuX3JlYWRfdXNlcnMiLCJjYW5fdXBkYXRlX3VzZXJzIiwiY2FuX2RlbGV0ZV91c2VycyJdLCJleHAiOjE3MDQ0MDg1MzEsImlhdCI6MTcwNDM3MjUzMX0.Qnw4Fc67urhl0cWhwGcrRf2zQRVHzINDX0ekHdJqScdTBV2gfx8_uWlQvSYGuQY3IqSwKADq0DBe8I22DkPygg
        // this.router.navigate(['users']);
      }
    );
  }


}
