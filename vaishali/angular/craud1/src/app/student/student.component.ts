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
      name : "lisa",
      age : 25,
      fee : 6500
    },
   
  ]
  oneStudent:Student={
    id : null,
    name : "",
    age : null,
    fee : null
  };
  n;

  constructor() { }

  ngOnInit() {
  }
  clearData(){
    this.student = {
      id : null,
      name: "",
      age: null,
      fee: null
    }
  }
  askDelete(a:Student){
    // console.log(a);
    this.oneStudent=a;
  }
  delete(){
    let n = this.studentArr.indexOf(this.oneStudent);
    this.studentArr.splice(n, 1);
  }
  askEdit(a:Student){
    this.n = this.studentArr.indexOf(a);
    // this.student=a;
    this.student = Object.assign({}, a);
    // Object.assign is used for break 2 way data binding
  }
  save(){
    // console.log(this.student);
    if(this.student.id)
    {
    
      this.studentArr[this.n]=this.student;
    }
    else
    {
      this.student.id = this.studentArr.length + 1;
      this.studentArr.push(this.student);
    }
    this.clearData();
}
}
