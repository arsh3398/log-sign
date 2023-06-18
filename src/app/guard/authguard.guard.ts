import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private authService: AuthserviceService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.Isloggedin()) {
      // User is authenticated, allow access to the route
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
