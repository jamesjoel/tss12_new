import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student:Student={
    id : null,
    name : "",
    age : null,
    fee : null
  }



  studentArr:Student[]=[
    {
      id : 1,
      name : "rohit",
      age : 25,
      fee : 5000
    },
    {
      id : 2,
      name: "jaya",
      age: 25,
      fee: 7000
    },
    {
      id : 3,
      name : "rajat",
      age : 25,
      fee : 6500
    },
    {
      id : 4,
      name : "gaurav",
      age : 30,
      fee : 4500
    }
  ]
  Name="oneStudent";
  oneStudent:Student={
    id : null,
    name : "",
    age : null,
    fee : null
  };
  constructor() { }

  ngOnInit() {
  }

}
