import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee, NewEmployee } from '../../models/employee.interface';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  allData:Employee[]=[];
  msg:string="";
  index:number;
  tmpEmployee: NewEmployee = {
    name: "",
    age: "",
    salary: ""
  };
  employee:Employee={
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
  askDelete(x:Employee){
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
  add(emp:NewEmployee){
    if(emp.id){
      this._emp.editEmployee(emp).subscribe(data=>{
        var editEmployee = { id : emp.id, employee_name : emp.name, employee_age : emp.age, employee_salary : emp.salary};
        this.allData[this.index]=editEmployee;
      });
    }
    else{
      
        this._emp.addEmployee(emp).subscribe(data=>{
          // console.log(data);
          var tempEmp = { id : data.id, employee_name : data.name, employee_age : data.age, employee_salary : data.salary};
          this.allData.push(tempEmp);
          
        }, 
        err=>{
          // console.log("---------------",err.error);
          this.msg="This Name Already Exists";
        });
    }



    
  }
  askEdit(x:Employee, n:number){
    this.index=n;
    this.tmpEmployee = { id : x.id, name : x.employee_name, age : x.employee_age, salary : x.employee_salary};
  }
  clearEmployee(){
    this.tmpEmployee={
      id : "",
      name : "",
      age : "",
      salary : ""
    }
  }



}
