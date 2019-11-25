import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  allData:any[]=[];
  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    this._emp.getEmployee().subscribe(data => {
      // console.log(data);
      this.allData=data;
    });
  }
  

}
