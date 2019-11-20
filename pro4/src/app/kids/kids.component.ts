import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  @Output() x = new EventEmitter();

  name:string="Rajat";
  a:string;
  constructor() { }

  ngOnInit() {
  }
  send(){
    this.x.emit(this.a);
  }
}
