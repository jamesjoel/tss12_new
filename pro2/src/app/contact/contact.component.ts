import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  a=true;

  constructor() { }

  ngOnInit() {
  }

  demo(){
    this.a = !this.a;
  }
  


}
