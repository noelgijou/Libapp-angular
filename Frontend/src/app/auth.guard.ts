import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router:Router){}
  canActivate():boolean{
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate([""])
      return false;
    }
  }
}
