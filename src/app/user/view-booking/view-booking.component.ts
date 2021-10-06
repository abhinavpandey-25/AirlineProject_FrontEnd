import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Booking';
import { BookingService } from 'src/app/Service/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  uId:any = localStorage.getItem('userId');
  userId = parseInt(this.uId);
  status:string;
  bookingList:Booking[] = [];

  b:Booking;

  msg:string = "";
  bremove:boolean = false;


  constructor(private bookingService:BookingService, private  router:Router) { }

  ngOnInit(): void {
    this.viewBookings();
  }
  
  viewBookings()
  {
    this.bookingService.viewBooking(this.userId).subscribe((data:any)=>
    {
      this.bookingList = data;

      console.log(this.userId);
      
    })
  }

  cancelBooking(bookingId:number)
  {   console.log("pressed");

    this.bookingService.cancelBooking(bookingId).subscribe((data:any)=>
    {
      this.msg = data;
      console.log(this.msg);
      location.reload();
    });

    alert("Cancelled booking successfully")
  }

  // remove(bookingStatus:string)
  // { 
  //   this.status = bookingStatus;
  //   if(this.status == "Refunded")
  //   {
  //     this.bremove = true;
  //   }
  // }

}
