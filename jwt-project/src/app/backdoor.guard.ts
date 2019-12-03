import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  
  constructor(private _userService : UserService, private _router : Router){ }
  
  canActivate() : boolean{
    if(this._userService.isLoggedIn()==true)
    {
      return true;
    }
    else
    { 
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
