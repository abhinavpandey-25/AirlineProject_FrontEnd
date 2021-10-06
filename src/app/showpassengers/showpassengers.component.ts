import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../Service/booking.service';
import { Passengers } from '../user/Passengers';

@Component({
  selector: 'app-showpassengers',
  templateUrl: './showpassengers.component.html',
  styleUrls: ['./showpassengers.component.css']
})
export class ShowpassengersComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private bservice:BookingService) { }
  bookingId:any;
  passengerList:Passengers[]=[];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.bookingId=params.get("bookingID") as string;
        console.log("hi",this.bookingId);
      }
    )
    this.bservice.getPassengerDetails(this.bookingId).subscribe((data:any)=>{this.passengerList=data ,console.log(this.passengerList)})
  }

}
