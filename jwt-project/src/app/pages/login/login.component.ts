import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg:String;
  user={
    username : "",
    password : ""
  }
  constructor(private _user : UserService) { }

  ngOnInit() {
  }
  login(){
    this._user.doLogin(this.user).subscribe(data=>{
      // console.log(data);
      localStorage.setItem("token", data.token);
      // this is browser/local variable for check user logged in or not, and used anywhere in angular project
    }, 
    err =>{
      console.log(err);
      this.errorMsg=err.error.msg;
    });
  }

}
