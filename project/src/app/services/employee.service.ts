import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getEmployee(){
    return this._http.get<any[]>("http://dummy.restapiexample.com/api/v1/employees");
  }
  deleteEmployee(id:string){
    return this._http.delete<any>("http://dummy.restapiexample.com/api/v1/delete/"+id);
  }
}
