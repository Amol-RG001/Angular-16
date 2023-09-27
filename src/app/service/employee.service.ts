import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataModel } from '../operations/create/dataModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  //add employee
  saveForm(data:dataModel){
    return this.http.post<dataModel>("http://localhost:3000/posts",data);
  }

  //get employee
  getAllEmployee(){
    return this.http.get<dataModel[]>("http://localhost:3000/posts");
  }

  //fetch
  fetchFormData(employeeId:number){
    return this.http.get<dataModel>("http://localhost:3000/posts/"+employeeId);
  }

  //updateForm
  updateForm(data:dataModel, id:number){
    return this.http.put<dataModel>("http://localhost:3000/posts/"+id,data);
  }

  removeEmployee(id:number){
    return this.http.delete<dataModel>("http://localhost:3000/posts/"+id);
  }

}


