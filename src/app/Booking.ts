import { Flight } from "./admin/Flight";
import { User } from "./user/User";

export class Booking{

    bookingId:number=0;
    flight: Flight;
    user: User;
    bookingDate:string="";
    travelClass: string="";
    bookingStatus: string="";
    noOfPassengers: number=0;
    totalCost: number=0;
    refundAmount: number=0;

    constructor(bookingId:number, flight:Flight, user:User, bookingDate:string, travelClass:string , bookingStatus: string, noOfPassengers: number, totalCost:number, refundAmount:number){

        this.bookingId=bookingId;
        this.flight= flight;
        this.user=user;
      // this.bookingDate=bookingDate;
        this.travelClass=travelClass;
        this.bookingStatus=bookingStatus;
        this.totalCost=totalCost;
        this.noOfPassengers=noOfPassengers;
        this.refundAmount=refundAmount;
       
        this.bookingDate = new Date().toISOString().slice(0, 16);
           
        

    }


}