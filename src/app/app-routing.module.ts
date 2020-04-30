import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes:Routes=[
  {path:'',pathMatch:'full',redirectTo:'/dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
