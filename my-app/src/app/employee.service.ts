import { Injectable } from '@angular/core';
import { commonService } from './commonService';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employeeModel';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private sourceUrl = '/assets123/source/employee.json';
  constructor(private _cmn:commonService,
              private httpClient:HttpClient) { }

  public getEmployees(): Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this.sourceUrl)
              .pipe(
                // retry(4),
                catchError(this.handleError)
              );
  }

  handleError(e){
    console.log(e.message + " - At Core service");
    return throwError(e);
  }
  
}
