import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User } from '../_models/index';
 
@Injectable()
export class ManagerGuard implements CanActivate 
{
    currentUser: User;
 
    constructor(
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) 
    {
        console.log(this.currentUser)
        if (localStorage.getItem('currentUser')) 
        {
           console.log(this.currentUser.role)
            if (this.currentUser.role=="")
            {
                // logged like student in so return true
                return true;
            }
            // not logged in so redirect to login page with the return url
            window.alert("You don't have permission to view this page"); 
            this.router.navigate(['/layout'], { queryParams: { returnUrl: state.url }});
            return true;
        }
        window.alert("You don't have permission to view this page"); 
        return true;
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        
    }
}