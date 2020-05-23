import { Component } from '@angular/core';

@Component({
  selector: 'startup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';
  myname:string = 'Tom';
}
