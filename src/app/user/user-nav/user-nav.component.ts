import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  userName:any = localStorage.getItem('userName');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut()
  {
    localStorage.clear
    this.router.navigateByUrl("")
  }
  searchFlight()
  {
    this.router.navigateByUrl("searchFlight")
  }

  viewBooking()
  {
    this.router.navigateByUrl("viewBooking")
  }

  dashboard()
  {
    this.router.navigateByUrl("userDash")
  }
}
