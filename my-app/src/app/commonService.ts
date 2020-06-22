import { Injectable } from '@angular/core';
import { IStudent } from './studentModel';

@Injectable({
  providedIn: 'root'
})
export class commonService {
  constructor() {

  }

  public getEmployees() {
    return [

    ];
  }

  public getStudents = () : IStudent[] => {
    return [{
      "id": 1,
      "name": "sree"
    }, {
      "id": 2,
      "name": "kim"
    }];
  }
}
