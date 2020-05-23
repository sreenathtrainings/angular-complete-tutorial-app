import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public name = "Tom123";
  public a = 35;
  public b = 90;

  public myId = "myInputForText";
  public myInputType = "checkbox";

  public plainClass = "mydiv-plain";
  public errorClass = "mydiv-error";
  public succesClass = "mydiv-success";

  public currentClass = "mydiv-plain";

  public myData = {
      id : "123",
      name: "Bin"
  }

  public isItalic = false;
  public isError = false;

  public myClasses ={
    "mydiv-italic" : this.isItalic,
    "mydiv-error" : this.isError,
    "mydiv-success" : !this.isError
  }

  public allClasses = {
    color:"green",
    fontStyle: "italic" 
  }

  public textColor = "blue";

  constructor() { 

      if(this.a > 5){
         this.myInputType = "text";

         this.currentClass = this.errorClass;

      }else{
        this.myInputType = "button";

        this.currentClass = this.succesClass;

      }

  }

  ngOnInit() {
  }

  public getData(){
    return "this is function!";
  }

}



// @Component({
//   selector: 'app-home',
//   template: `<h1>This is my home!</h1>
//           <div>This is new line..!</div>`,
//   styles: [`
//       h1{
//           color: green;
//       }
//       div{
//           color : red
//       }
//   `]
// })
