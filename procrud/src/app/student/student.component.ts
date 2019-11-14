import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student={
    name : "",
    age : null,
    fee : null
  }



  studentArr=[
    {
      name : "rohit",
      age : 25,
      fee : 5000
    },
    {
      name: "jaya",
      age: 25,
      fee: 7000
    }
  ]



  constructor() { }

  ngOnInit() {
  }

  save(){
    // console.log(this.student);
    this.studentArr.push(this.student);
    this.student={
      name : "",
      age : null,
      fee : null
    }
  }

}
