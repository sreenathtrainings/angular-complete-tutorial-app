import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parttwo',
  templateUrl: './parttwo.component.html',
  styleUrls: ['./parttwo.component.scss']
})
export class ParttwoComponent implements OnInit {


  public employee = {
    "id":"1235",
    "name":"sree",
    "details":{
        role:"developer"
    }
  }

  public mydate = new Date();

  public textData = "This is my learning!";

  public myData = "Its sdsf blank..";
  public isShown = true;
  public valueForData = false;

  public name = "Tom";

  public dataNames = ['tom', 'ken', 'kim', 'bin'];








  private counter = 1;
  public currentData = "This is blank!";
  

  constructor() { }

  ngOnInit() {
  }

  readText(ele){
    console.log(ele.value);
  }

  public clickMe(){
    // var a = 10;
    // var x = a + 90;
    console.log("Button clicked!")
    // console.log(x);
    
    this.counter++;
    this.currentData = "Action happened! " + this.counter;
  }

  
}
