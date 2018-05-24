import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User } from '../_models/index';
 
@Injectable()
export class ManagerGuard implements CanActivate 
{
    currentUser: User;
    constructor(
        private router: Router
    ) {}
 
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (this.currentUser.role=="manager") {
            // logged in so return true
            // window.alert(this.currentUser.role);
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        window.alert("You don't have permission to view this page");
        this.router.navigate(['/layout'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}