import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: User = { name: '', surname: '', email: '', password: '', permissions: '' };

  constructor(private router: Router, private userService: UserService) {}

  createUser() {
    // this.userService.createUser(this.newUser).subscribe(
    //   () => {
    //     this.router.navigate(['/user-display']);
    //   },
    //   (error) => {
    //     console.error('Error creating user:', error);
    //     // Handle error and notify the user
    //   }
    // );
  }
}
