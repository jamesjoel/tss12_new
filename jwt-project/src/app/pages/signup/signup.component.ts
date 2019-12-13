import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkNumber } from '../../helpers/myValidation';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  errorMsg:string;
  user:FormGroup;
  // user:User={
  //   full_name : "",
  //   username : "",
  //   password :"",
  //   contact : ""
  // }

  submitted = false;

  constructor(
    private _fb : FormBuilder,
    private _user : UserService, 
    private _router : Router) 
    { }


  ngOnInit() {
    this.user = this._fb.group({
      full_name : ['', Validators.required],
      username : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]],
      contact: ['', [Validators.required, checkNumber]]
    });

    
  }
  signup(){
    this.submitted=true;
    if(this.user.invalid){
      return;
    }
    console.log(this.user.value);
    
    // this._user.checkUsername(this.user.username).subscribe(data=>{
    //   // console.log(data);
    //   if(data==true)
    //   {
        
    //     this._user.saveUser(this.user).subscribe(data=>{
        
    //       this._router.navigate(["/login"]);
    //     });
    //   }
    //   else{
    //     this.errorMsg="This Username Already Exists";
    //   }

    // });
    }

}
