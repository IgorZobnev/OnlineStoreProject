import { Router } from '@angular/router';
import { AuthService } from './../../Model/auth.service';
import { Component } from "@angular/core";

@Component({
    templateUrl: "admin.component.html"
})

export class AdminComponent {
    constructor(private auth: AuthService, private rout: Router) {}

    logout() {
        this.auth.clear();
        this.rout.navigateByUrl("/");
    }
}