import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../Model/auth.service';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard {
    constructor(private route: Router, private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if (!this.auth.authenticated) {
            this.route.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}