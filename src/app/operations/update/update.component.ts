import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { dataModel } from '../create/dataModel';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  public empId!:number;
  public empDataModel!:dataModel;

  //formsModule
  constructor(private activateRoute:ActivatedRoute, private r:Router, private emp: EmployeeService){

  }

  ngOnInit(){
    this.activateRoute.paramMap.subscribe((param:Params)=>{
      this.empId = param['get']("id");
      console.log("my empId = "+this.empId)
    })
    this.emp.fetchFormData(this.empId).subscribe((data:dataModel)=>{
      this.empDataModel = data;
    })
  }

  updateFormData(){
   this.emp.updateForm(this.empDataModel,this.empId).subscribe((res:dataModel)=>{
    this.r.navigate(["/"]);
   })
  }

}
