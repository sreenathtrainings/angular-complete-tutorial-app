import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employeeModel';

@Component({
  selector: 'app-employeepersonalinfo',
  templateUrl: './employeepersonalinfo.component.html'
})
export class EmployeepersonalinfoComponent implements OnInit {

  public employeeDetails:IEmployee[] = [];

  constructor(private _empService:EmployeeService) { }

  ngOnInit() {

      var observe = this._empService.getEmployees();
      observe.subscribe(
        resp =>{ 
          this.employeeDetails = resp; 
        },
        error=> {
          console.log(error.message + "At consumer")
        });
  }

}
