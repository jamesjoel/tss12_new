import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employee : EmployeeService) { }
  allData:any;
  ngOnInit() {
  }

  demo(){
    // console.log(this._employee.getEmployee());
    this._employee.getEmployee().subscribe(data=>{
      // console.log(data);
      this.allData=data;
    });
  }

}
