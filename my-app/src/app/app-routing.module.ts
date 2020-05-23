import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo:'/studentlist', pathMatch:"full" },
  { path: "studentlist", component: StudentlistComponent },
  { path: "studentdetails", component: StudentdetailsComponent },
  { path: "**", component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const registeredComponents = [StudentlistComponent, StudentdetailsComponent]
