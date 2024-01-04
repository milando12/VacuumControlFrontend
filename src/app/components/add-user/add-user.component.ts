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
    if (!this.checkPermissions(this.newUser.permissions)) {
      console.log('Permissions are invalid');
      alert('Permissions are invalid');
      return;
    }

    this.userService.createUser(this.newUser).subscribe(
      () => {
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error creating user:', error);
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
