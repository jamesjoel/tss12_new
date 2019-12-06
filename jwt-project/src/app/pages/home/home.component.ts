import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data=[
    {
      name : "rohit",
      age : 25,
      gender : "male",
      salary : 5500
    },
    {
      name : "james",
      age : 23,
      gender : "male",
      salary : 8700
    },
    {
      name : "nisha",
      age : 28,
      gender : "female",
      salary : 4000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
