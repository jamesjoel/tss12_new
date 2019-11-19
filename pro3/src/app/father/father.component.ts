import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  x:string;
  y:User={
    name : "",
    age : null
  };
  constructor() { }

  ngOnInit() {
  }
  pDemo(a:string)
  {
    console.log(a);
    this.x=a;
  }
  userRec(a:User){
    this.y=a;
  }


}
