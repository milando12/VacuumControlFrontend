import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User, UserNoPassword} from "../../model";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  users: UserNoPassword[] = [];

  constructor(private router: Router, private userService: UserService, public auth:AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    console.log("loadUsers");
    this.userService.getUserList().subscribe(
      (data) => {
        this.users = data;
        console.log("data", data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  editUser(email: string) {
    console.log("editUser");
    if (this.auth.userHasPermission('can_update_users')) {
      this.router.navigate(['/edit-user', email]);
    }
  }

  deleteUser(email: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(email).subscribe(
        () => {
          this.loadUsers();
          console.log("User deleted successfully");
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  goToAddUserPage() {
    this.router.navigate(['/add-user']);
  }
}
