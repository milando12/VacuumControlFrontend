import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("started AuthGuard");

    const url = state.url;

    if (url.endsWith('add-user')) {
      console.log('canActivate add-user ' + this.auth.userHasPermission('can_create_users'));
      return this.auth.userHasPermission('can_create_users');
    }

    if (url.includes('edit-user')) {
      console.log('canActivate edit-user ' + this.auth.userHasPermission('can_update_users'));
      return this.auth.userHasPermission('can_update_users');
    }

    return true;
  }
}
