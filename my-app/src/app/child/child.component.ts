import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Input() public parentEmployee:any;

  @Output() public childMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.childMessage.emit("Hello, this is message from Child!");
  }

}