import { Component } from '@angular/core';
import {LoginRequest} from "../../model";
import {LoginServiceService} from "../../services/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private loginService: LoginServiceService) { }

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
      },
      (error) => {
        this.error = "Login failed";
        console.error('Login failed:', error);
      }
    );

    //TODO: change to UserViewComponent
  }


}
