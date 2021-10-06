export class Flight
{
        flightId: number=0;
        adminId:number=0;
        flightName: string="";
        source:string="";
        destination:string="";
        departureDate:string="";
        departureTime: string="";
        arrivalDate:string="";
        arrivalTime:string="";
        economicSeats: number=0;
        businessSeats: number=0;
        economyCost: number=0;
        businessCost: number=0;
        eSeatsBooked: number=0;
        bSeatsBooked: number=0;
  
        constructor() {
            this.departureDate = new Date().toISOString().slice(0, 16);
            this.arrivalDate = new Date().toISOString().slice(0, 16);
        }
}
