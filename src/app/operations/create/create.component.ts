import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { dataModel } from './dataModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  //attribute declaration
  employeeForm!:FormGroup;
  emplData:undefined|dataModel[];

  constructor(private formBuilder:FormBuilder, private route:Router,  private emp:EmployeeService){

  }

  ngOnInit():void{
    // validator for validate the- field
    this.employeeForm = this.formBuilder.group({
      name:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      phone:['',Validators.required],
      website:['',Validators.required],
      company:['',Validators.required]

  
    })

   

  }

  // saveForm - add employee
  saveForm(checkData:dataModel){
    console.log(checkData);
   this.emp.saveForm(checkData).subscribe(res=>{
    this.employeeForm.reset();
    this.route.navigate(["/home"]);
   })
  }

  

}
