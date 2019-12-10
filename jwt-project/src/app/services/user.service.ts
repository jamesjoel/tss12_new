import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
      private _http : HttpClient,
      private _router : Router) 
      { }
  saveUser(user:User){
    return this._http.post<User>("http://localhost:3000/api/signup", user);
  }
  checkUsername(u:string){
    return this._http.post<any>("http://localhost:3000/api/user/usernamecheck", { username : u });
  }



  
  doLogin(user:any){
    return this._http.post<any>("http://localhost:3000/api/user/auth", user);
  }

  logout(){
    localStorage.removeItem("token"); 
    this._router.navigate(["/login"]);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  isLoggedIn(){
    if(localStorage.getItem("token"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
