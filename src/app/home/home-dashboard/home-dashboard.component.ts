import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome()
  {
    this.router.navigateByUrl("")
  }

  register()
  {
    this.router.navigateByUrl("userReg")
  }

  goLogin()
  {
    this.router.navigateByUrl("userLogin");
  }

  contactUs()
  {
    this.router.navigateByUrl("contactUs");
  }

  aboutUs()
  {
    this.router.navigateByUrl("aboutUs")
  }
}
