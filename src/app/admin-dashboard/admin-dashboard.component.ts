import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  catergory:boolean=false;
  product:boolean=false;
  user:boolean=false
  constructor() { }

  ngOnInit() {
  }
  AddNewCategory(){
    this.catergory=true;
    this.product=false;
    this.user=false
  }
  AddNewProduct(){
    this.product=true;
    this.catergory=false;
    this.user=false
  }
  AddNewUser(){
    this.user=true;
    this.product=false;
    this.catergory=false
  }
}
