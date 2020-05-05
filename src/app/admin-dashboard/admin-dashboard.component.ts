import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  productName: any;
  productSize: any;
  productColor: any;
  productPrice: any;
  obj: any;
  catergory: boolean = false;
  product: boolean = false;
  user: boolean = false;
  constructor(private router: Router, private service: CommonService) {}

  ngOnInit() {}
  AddNewCategory() {
    this.catergory = true;
    this.product = false;
    this.user = false;
  }
  AddNewProduct() {
    this.obj = {
      productName: this.productName,
      productSize: this.productSize,
      productColor: this.productColor,
      productPrice: this.productPrice,
    };
    this.service.products(this.obj).subscribe((data) => {
      console.log(data);
    });
  }
  AddNewUser() {
    this.user = true;
    this.product = false;
    this.catergory = false;
  }
}
