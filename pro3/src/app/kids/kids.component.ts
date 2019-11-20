import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  newUser:User={
    name : "",
    age : null
  }

  @Output() goToParent = new EventEmitter();
  @Output() userGoToParent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  demo()
  {
    this.goToParent.emit("my name is rohit");
  }
  demo2(){
    this.userGoToParent.emit(this.newUser);
  }

}
