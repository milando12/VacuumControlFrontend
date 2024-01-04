import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {User} from "../../model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = { name: '', surname: '', email: '', password: '', permissions: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   const userEmail = params['email'];
    //   this.userService.getUserByEmail(userEmail).subscribe(
    //     (userData) => {
    //       this.user = userData;
    //     },
    //     (error) => {
    //       console.error('Error fetching user data:', error);
    //     }
    //   );
    // });
  }

  saveUser() {
    // this.userService.updateUser(this.user).subscribe(
    //   () => {
    //     this.router.navigate(['/user-display']);
    //   },
    //   (error) => {
    //     console.error('Error updating user:', error);
    //     // Handle error and notify the user
    //   }
    // );
  }
}
