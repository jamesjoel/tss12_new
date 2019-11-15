import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student={
    id: null,
    name : "",
    age : null,
    fee : null
  }



  studentArr=[
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


  oneStudent={
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

  save(){
    // console.log(this.student);
    if(this.student.id)
    {
      // for(var i=0; i<this.studentArr.length; i++)
      // {
      //   if(this.studentArr[i].id==this.student.id)
      //   {
      //     this.studentArr[i]=this.student;
      //   }
      // }
      this.studentArr[this.n]=this.student;
    }
    else
    {
      this.student.id = this.studentArr.length + 1;
      this.studentArr.push(this.student);
    }
    this.clearData();



    
    // this.student={
    //   name : "",
    //   age : null,
    //   fee : null
    // }
  }

  askDelete(a){
    // console.log(a);
    this.oneStudent=a;
  }
  delete(){
    let n = this.studentArr.indexOf(this.oneStudent);
    this.studentArr.splice(n, 1);
  }
  askEdit(a){
    this.n = this.studentArr.indexOf(a);
    // this.student=a;
    this.student = Object.assign({}, a);
    // Object.assign is used for break 2 way data binding
  }

}
