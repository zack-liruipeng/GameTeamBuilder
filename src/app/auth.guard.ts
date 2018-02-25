import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth:AuthService) { }


//for authentication service
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.authenticated()) {
            console.log("pass");
            return true;
        }
        else {
            console.log('blocked');
            this.router.navigate(['notfound']);
            return false;
        }
    }
}