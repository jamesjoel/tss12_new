import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../models/user.interface';

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
  updateUser(user:User){
    return this._http.put<any>("http://localhost:3000/api/user/getuser/" + user._id, user, {
      headers: { Authorization: this._userService.getToken() }
    });
  }

}