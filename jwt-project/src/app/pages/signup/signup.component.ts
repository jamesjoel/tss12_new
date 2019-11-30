import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  user:User={
    full_name : "",
    username : "",
    password :"",
    contact : ""
  }

  constructor(private _user : UserService) { }


  ngOnInit() {
  }
  signup(){
    this._user.check(this.user.username).subscribe(data=>{
      if(data==true){
        this._user.saveUser(this.user).subscribe(data=>{
          console.log(data);
        });

      }
      else
      {
        
      }
    });
  }

}
