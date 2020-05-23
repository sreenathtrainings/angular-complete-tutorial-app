import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  public cMessage;
  public data = "This is from parent!";
  public employee = {
      id:"1234",
      name:"sre"
  }

  constructor() { }

  ngOnInit() {
  }

}
