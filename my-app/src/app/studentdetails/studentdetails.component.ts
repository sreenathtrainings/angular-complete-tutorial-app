import { Component, OnInit } from '@angular/core';
import { commonService } from '../commonService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: []
})
export class StudentdetailsComponent implements OnInit {

  name: string;
  id: number;

  constructor(
    public commonService: commonService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    let currentId = +this.route.snapshot.paramMap.get("id");
    var students = this.commonService.getStudents();
    var selectedStudent = students.find(_ => _.id === currentId);

    this.id = selectedStudent.id;
    this.name = selectedStudent.name;

  }

}
