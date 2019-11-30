import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private _http : HttpClient) { }
  saveUser(user:User){
    return this._http.post<User>("http://localhost:3000/api/signup", user);
  }
}
