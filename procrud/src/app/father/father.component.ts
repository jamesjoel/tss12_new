import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  pName="rohit verma";

  pObj={
    salary : 5000,
    employee_name : "rajat"
  }

  boxData="hello world";


  constructor() { }

  ngOnInit() {
  }

}
