import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, NewEmployee } from '../models/employee.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getEmployee(){
    return this._http.get<Employee[]>("http://dummy.restapiexample.com/api/v1/employees");
  }
  deleteEmployee(id:string){
    return this._http.delete<any>("http://dummy.restapiexample.com/api/v1/delete/"+id);
  }
  addEmployee(emp:NewEmployee){
    return this._http.post<any>("http://dummy.restapiexample.com/api/v1/create", emp);
  }
  editEmployee(emp:NewEmployee){
    return this._http.put<any>("http://dummy.restapiexample.com/api/v1/update/"+emp.id, emp);
  }
}
