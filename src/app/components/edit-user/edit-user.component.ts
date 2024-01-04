import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {User, UserNoPassword} from "../../model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: UserNoPassword = { id: -1, name: '', surname: '', email: '', permissions: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userEmail = params['email'];
      this.userService.getUserByEmail(userEmail).subscribe(
        (userData) => {
          this.user = userData;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    });
  }

  saveUser() {
    // console.log('Saving user:', this.user.name);

    if (!this.checkPermissions(this.user.permissions)) {
      console.log('Permissions are invalid');
      alert('Permissions are invalid');
      return;
    }

    this.userService.updateUser(this.user).subscribe(
      () => {
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  private checkPermissions(permissions: string): boolean {
    const permissionsArray = permissions.split(',');
    const validPermissions = ['can_create_users', 'can_read_users', 'can_update_users', 'can_delete_users'];
    for (const permission of permissionsArray) {
      if (!validPermissions.includes(permission)) {
        return false;
      }
    }
    return true;
  }
}
