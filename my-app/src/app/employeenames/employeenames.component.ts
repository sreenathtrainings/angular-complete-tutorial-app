import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employeeModel';

@Component({
  selector: 'app-employeenames',
  templateUrl: './employeenames.component.html'
})
export class EmployeenamesComponent implements OnInit {

  public employeeDetails:IEmployee[] = [];

  constructor(private _empService:EmployeeService) { }

  ngOnInit() {
    
    // this._empService.getEmployees().subscribe(r=>{
    //     this.employeeDetails = r;
    // });

  }

}
