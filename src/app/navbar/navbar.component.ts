import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  email: any;
  username: any;
  mobile: any;
  value: any;
  password: any;
  obj: any;
  constructor(
    private router: Router,
    private service: CommonService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  signIn() {
    this.obj = {
      username: this.username,
      password: this.password,
    };
    this.service.login(this.obj).subscribe((data) => {
      console.log(data);
    });
  }

  registerDetails() {
    this.obj = {
      email: this.email,
      username: this.username,
      mobile: this.mobile,
      password: this.password,
    };
    this.service.register(this.obj).subscribe((data) => {
      console.log(data);
      alert(data["message"]);
    });
  }
  login() {
    this.obj = {
      username: this.username,
      password: this.password,
    };
    //this.toastr.success("Hello world!", "Toastr fun!");
    console.log(this.obj);
    this.service.login(this.obj).subscribe((data) => {
      if (data["status"]) {
        this.router.navigate(["dashboard"]);
      } else {
        alert(data["message"]);
      }
    });
  }
}
