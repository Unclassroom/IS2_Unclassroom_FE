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
    ) 
    {
        if (localStorage.getItem('currentUser')) 
        {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (this.currentUser.role=="manager")
            {
                // logged like student in so return true
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}