import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/Service/booking.service';
import { Passengers } from '../Passengers';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  pass:any = localStorage.getItem('noOfPassengers'); // to get the no. of passengers
  noOfpass:number = parseInt(this.pass);

  submitted:boolean = false;

  arr:Array<number> = [];
  num:number = this.noOfpass; 

  id:any ; // to get the booking id
  bookingId:number;


  Name:string;
  passenger2:Passengers;

  fid:any = localStorage.getItem('flightId');
  flightId:number = parseInt(this.fid);

  uid:any = localStorage.getItem('userId')
  userId:number = parseInt(this.uid);

  passengerForm: FormGroup;


  count:boolean = true;
  counter:number = 0;
  
  addButton:boolean = false;
  passenger:any;
  constructor (private formBuilder: FormBuilder, private router:Router, private bookingService:BookingService ) { }

  ngOnInit(): void {


    this.passengerForm = this.formBuilder.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
      gender: ['',Validators.required],
     
  
      
  },

  );

  console.log(this.noOfpass);
  console.log(typeof this.noOfpass);
  console.log(this.bookingId)
  this.id = localStorage.getItem('bookingId'); // to get the booking id
  this.bookingId = parseInt(this.id); 

  }

  toSearchPage(){
    this.router.navigateByUrl('searchFlight')
  }


    
  onSubmit() {
    this.submitted = true;
    if (this.passengerForm.invalid)
    { 
      return;
  }


    this.passenger={
      "booking":{
        "bookingId": this.bookingId,
        "travelClass":"",
        "bookingDate":"",
        "bookingStatus":"not confirmed",
        "noOfPassengers":"",
        "totalCost": 0,
        "refundAmount":0,
        "user": {
          "userId": this.userId,
          "email": "",
          "password": "",
          "title": "",
          "firstName": "",
          "lastName": "",
          "phoneNumber": 0,
          "dob": ""
      },
      "flight": {
        "flightId": this.flightId,
        "adminId": 0,
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
  
        },
      "name": this.passengerForm.value.name,
      "passengerAge":this.passengerForm.value.age,
      "gender": this.passengerForm.value.gender,
      "seatNo": ""
    }
    console.log(this.passengerForm.value.age)
    this.bookingService.addPassenger(this.passenger).subscribe((data:any)=>
    {
      this.passenger2 =data;
      console.log(this.passenger2)
      this.passengerForm.reset();
      this.counter+=1;
      console.log(this.counter);
      this.submitted = false;
      if(this.counter == this.noOfpass)
      {
        this.addButton = true;
        this.count = false
        this.counter =0;
      }
    });


   }


   toPayment()
   {
      this.router.navigateByUrl('payments')
   }



}