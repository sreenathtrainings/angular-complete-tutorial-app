import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { AppRoutingModule, registeredComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ParttwoComponent } from './parttwo/parttwo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeepersonalinfoComponent } from './employeepersonalinfo/employeepersonalinfo.component';
import { EmployeenamesComponent } from './employeenames/employeenames.component';
import { EmployeeService } from './employee.service';
import { commonService } from './commonService';
import { HttpClientModule } from "@angular/common/http";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalinfoComponent,
    TextboxComponent,
    ParttwoComponent,
    ParentComponent,
    ChildComponent,
    EmployeepersonalinfoComponent,
    EmployeenamesComponent,
    registeredComponents,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [EmployeeService, commonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
