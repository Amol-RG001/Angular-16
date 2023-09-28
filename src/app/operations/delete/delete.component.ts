import { Component } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  
  constructor(private emp:EmployeeService, private get:HomeComponent){

  }

  deleteRow(id:number){
    this.emp.removeEmployee(id).subscribe(res=>{
      this.get.getAllEmployee();
    })

}}
