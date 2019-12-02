import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  errorMsg:string;
  user:User={
    full_name : "",
    username : "",
    password :"",
    contact : ""
  }

  constructor(private _user : UserService, private _router : Router) { }


  ngOnInit() {
  }
  signup(){
    
    this._user.checkUsername(this.user.username).subscribe(data=>{
      // console.log(data);
      if(data==true)
      {
        
        this._user.saveUser(this.user).subscribe(data=>{
        
          this._router.navigate(["/login"]);
        });
      }
      else{
        this.errorMsg="This Username Already Exists";
      }

    });
    }

}
