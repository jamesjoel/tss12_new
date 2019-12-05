import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../services/userprofile.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _profile : UserprofileService) { }
  user:User={
    full_name : "",
    username : "",
    contact : "",
    password : ""
  };
  goUserForUpdate: User = {
    full_name: "",
    username: "",
    contact: "",
    password: ""
  };
  
  ngOnInit() {
    this._profile.getUser().subscribe(data=>{
      console.log(data);
      this.user = data;
      this.goUserForUpdate = Object.assign({}, this.user);
    });
  }
  edit(obj){
    this.user = obj;
  }
  

}
