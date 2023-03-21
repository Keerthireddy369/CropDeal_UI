import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(private authService: AuthService,private router:Router) { }
  canActivate(){
    if(this.authService.IsLoggedIn()){
      return true;
    }
    this.router.navigate(["signin"]);
    return false;
  }
      
}
