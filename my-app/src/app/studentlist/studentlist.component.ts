import { Component, OnInit } from '@angular/core';
import { commonService } from '../commonService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: []
})
export class StudentlistComponent implements OnInit {

  constructor(
    public commonService: commonService,
    private router: Router) { }

  ngOnInit() {
  }

  onStudentSelected(id: number) {
    this.router.navigate(['studentdetails', id]);
  }

}
