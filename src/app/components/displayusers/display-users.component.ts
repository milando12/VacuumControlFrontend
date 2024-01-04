import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../model";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private userService: UserService, public auth:AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // this.userService.getUsers().subscribe(
    //   (data) => {
    //     this.users = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching users:', error);
    //   }
    // );
  }

  editUser(email: string) {
    this.router.navigate(['/edit-user', email]);
  }

  deleteUser(email: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      // this.userService.deleteUser(email).subscribe(
      //   () => {
      //     this.loadUsers();
      //   },
      //   (error) => {
      //     console.error('Error deleting user:', error);
      //     // Handle error and notify the user
      //   }
      // );
    }
  }

  goToAddUserPage() {
    this.router.navigate(['/add-user']);
  }
}
