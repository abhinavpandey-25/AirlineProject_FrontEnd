import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Booking';
import { BookingService } from 'src/app/Service/booking.service';
import { Flight } from '../Flight';
import { sFlight } from '../sFlight';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  sf:any;
  ebooked:any;   eb:any;
    bbooked:any;  bb:any;
    teseats:any;   te:any;
    tbseats:any;   tb:any;  etotal:any; btotal:any;

  userId: any;
  flightId: any;   noofpassen:any;
  searchFlight: FormGroup;
  //passengerForm: FormGroup;
  flightList: Flight[]=[];
  flightSearched: boolean = true;
  booked: boolean =false;
  b2:any;
  submitted: boolean = false;
  b1:any
   = {
    bookingId: 0, travelClass: '', bookingDate: '', bookingStatus: '', noOfPassengers: 0, totalCost: 0, refundAmount: 0,
    user: { userId: 0, email: '', password: '', title: '', firstName: '', LastName: '', phoneNumber: 0, dob: '' },
    flight: {
      flightId: 0, adminId: 0, flightName: '', source: '', destination: '', departureDate: '', departureTime: '', arrivalDate: '', arrivalTime: '', economicSeats: 0, economyCost: 0, eSeatsBooked: 0, bSeatsBooked: 0, businessSeats: 0, businessCost: 0
    }

  };

  constructor(private bookingService: BookingService, private formBuilder: FormBuilder, private router: Router) 
  {  this.userId = sessionStorage.getItem("userId");
     this.flightId = sessionStorage.getItem("flightId");
     console.log("userId:" + sessionStorage.getItem("userId"));
     console.log("flightId:" +sessionStorage.getItem("flightId"));
  }

  ngOnInit(): void {

    this.searchFlight = new FormGroup({

      source: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      noOfPassengers: new FormControl('', Validators.required),
      travelClass:new FormControl ('', Validators.required),

    });
    
   }

    
  onSearch()
  {
 
    if(this.searchFlight.invalid)
    {
      alert("Please enter all the fields");  
    }
    else
    {
      this.sf={
          "source":this.searchFlight.value.source,
          "destination":this.searchFlight.value.destination,
          "departureDate":this.searchFlight.value.departureDate,
          "travelClass":this.searchFlight.value.travelClass,
          "noOfPassengers":this.searchFlight.value.noOfPassengers
           }

      console.log(this.sf);
           
      this.bookingService.searchFlight1(this.sf).subscribe((data: any) =>
       {
  
          this.flightList = data;  console.log(this.flightList);
          this.flightSearched=!this.flightSearched;     //search from disabled now flight list with book button will appear
          this.ebooked=this.flightList[0].eSeatsBooked;  console.log(this.ebooked);
          localStorage.setItem('ebooked',this.ebooked);
          this.bbooked=this.flightList[0].bSeatsBooked;  console.log(this.bbooked);
          localStorage.setItem('bbooked',this.bbooked);
          this.teseats=this.flightList[0].economicSeats;  console.log(this.teseats);
          localStorage.setItem('teseats',this.teseats);
          this.tbseats=this.flightList[0].businessSeats;  console.log(this.tbseats);
          localStorage.setItem('tbseats',this.tbseats);
       });
    
     localStorage.setItem('noOfPassengers',this.searchFlight.value.noOfPassengers);
     this.noofpassen=localStorage.getItem("noOfPassengers");
    }  //else ends here
   this.eb=localStorage.getItem('ebooked'); this.bb=localStorage.getItem('bbooked'); this.te=localStorage.getItem('teseats'); this.tb=localStorage.getItem('tbseats');
    console.log(this.flightList);  
  
    console.log(this.noofpassen); console.log(this.te-this.eb); this.etotal=this.te-this.eb; this.btotal=this.tb-this.bb;
    if(this.noofpassen>this.etotal)
    {this.booked=true; console.log(this.booked);}
    else if(this.noofpassen>this.btotal)
    {this.booked=true; console.log(this.booked);}

  }   //onSearch() ends here


  getDetails(flightId:number){
    if(this.searchFlight.invalid)
    {
      this.searchFlight.reset();
      
    }



    this.b1 = {
      "travelClass":this.searchFlight.value.travelClass,
      "bookingStatus":"not confirmed",
      "noOfPassengers":this.searchFlight.value.noOfPassengers,
      "totalCost": 0,
      "refundAmount":0,
      "user": {
        "userId": localStorage.getItem('userId'),
        "email": "",
        "password": "",
        "title": "",
        "firstName": "",
        "lastName": "",
        "phoneNumber": 0,
        "dob": ""
    },
    "flight": {
      "flightId":flightId,
      "flightName": "",
      "source": "",
      "destination": "",
      "departureDate": "",
      "departureTime": "",
      "arrivalDate": "",
      "arrivalTime": "",
      "economicSeats": 0,
      "businessSeats": 0,
      "economyCost": 0,
      "businessCost": 0,
      "eSeatsBooked": 0,
      "bSeatsBooked": 0
  }

      }
 
    console.log(this.b1);
    localStorage.setItem('flightId',this.flightId);


    this.bookingService.addBooking(this.b1).subscribe((data:any)=>
    {this.b2 = data;
      console.log(this.b2);
      localStorage.setItem('bookingId',this.b2.bookingId.toString());
    localStorage.setItem('totalCost', this.b2.totalCost.toString());
    console.log(localStorage.getItem('bookingId'));
  
      this.router.navigateByUrl("passengers")

    });
    
   
      
  }

}
