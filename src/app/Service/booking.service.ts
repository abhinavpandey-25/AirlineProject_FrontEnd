import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../user/Payment';
import { sFlight } from '../user/sFlight';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl: string="http://localhost:8090/api/v1/";


  constructor(private http:HttpClient) { }

  public searchFlight1(sflight: Object) :Observable<Object> {
    
    // console.log(( "http://localhost:8090/api/v1/" +source+"/"+destination+"/"+departureDate+"/"+travelClass));
   return this.http.post( "http://localhost:8090/api/v1/sFlight" , sflight); }
 


   public addBooking(booking:object) :Observable<Object>
   {
     return this.http.post("http://localhost:8090/api/v1/addBooking", booking);
   }

   public addPassenger(passenger:object) :Observable<Object>
   {
     return this.http.post("http://localhost:8090/api/v1/addPassenger", passenger)
   }

   public payBill(payment:object) :Observable<Object>
   {
      return this.http.post("http://localhost:8090/api/v1/payBill", payment)
   }

   public viewBooking (userId:number)
   {
    // console.log(this.http.get("http://localhost:8090/api/v1/bookings/" + userId))
     return this.http.get("http://localhost:8090/api/v1/bookings/" + userId);
   }

   public cancelBooking(bookingId:number)
   {
     return this.http.delete("http://localhost:8090/api/v1/bookingdelete/" + bookingId);
   }
   public getPassengerDetails(bookingId:number){
     console.log("booking ",bookingId);
    // console.log(this.http.get("http://localhost:8090/api/v1/getpassengerdetails"+bookingId))
     return this.http.get("http://localhost:8090/api/v1/getpassengerdetails/"+bookingId);
   }
}
