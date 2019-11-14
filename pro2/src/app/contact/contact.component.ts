import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  a=true;
  color = "red";


  myobj={
    'background-color':'blue',
    'height' : '100px',
    'width' : '100px'
  }

  constructor() { }

  ngOnInit() {
  }

  demo(){
    this.a = !this.a;
  }
  


}
