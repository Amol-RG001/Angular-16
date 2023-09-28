import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { dataModel } from 'src/app/operations/create/dataModel';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  emplData:undefined|dataModel[];

  toggleBtn:boolean=false;
  constructor(private formBuilder:FormBuilder, private emp:EmployeeService){

  }
  ngOnInit(): void {    
    this.getAllEmployee();
  }

  displayTable(){
    this.toggleBtn=!this.toggleBtn;
  }
  

   //getEmployee - 
   getAllEmployee(){
    this.emp.getAllEmployee().subscribe(res=>{
      this.emplData = res;
    })
  }

//delete record
  deleteRow(id:any){
    if(confirm("Are you want to delete record no. "+ id+"?")){
      this.emp.removeEmployee(id).subscribe(res=>{
        this.getAllEmployee();
      })
    }



  }

}
