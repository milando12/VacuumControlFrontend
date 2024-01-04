// auth.service.ts
import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userHasPermission(permission: string): boolean {
    const token = localStorage.getItem('umToken');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);

        // Check if the specified permission exists in the user's permissions
        return decodedToken.permissions.includes(permission);
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }

    return false;
  }
}
