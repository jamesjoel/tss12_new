import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  allData:any[]=[];
  employee:any={
    id : "",
    employee_name : "",
    employee_salary : "",
    employee_age : ""
    
  };
  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    this._emp.getEmployee().subscribe(data => {
      console.log(data);
      this.allData=data;
    });
  }
  askDelete(x:any){
    this.employee=x;
  }
  deleteEmployee(){
    // console.log(this.employee.id);
    this._emp.deleteEmployee(this.employee.id).subscribe(data=>{
      if(data){
        var n = this.allData.indexOf(this.employee);
        this.allData.splice(n, 1);
      }
    });
  }

}
