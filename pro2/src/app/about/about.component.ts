import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  a="rohit";
  x=100;
  y=200;

  data=["indore", "ujjain", "bhopal"];

  color = ["red", "green", "blue", "yellow", "pink"];



  constructor() { }

  ngOnInit() {
  }

}
