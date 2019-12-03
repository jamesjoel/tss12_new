import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private _http : HttpClient, private _userService : UserService) { }

  getUser(){
    return this._http.get<any>("http://localhost:3000/api/user/getuser", {
      headers : { Authorization : this._userService.getToken()}
    })
  }

}
