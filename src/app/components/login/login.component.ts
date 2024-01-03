import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Perform authentication logic here
    console.log('Username:', this.username);
    // console.log('Password:', this.password);
    // Add your authentication logic and route navigation here
  }
}
