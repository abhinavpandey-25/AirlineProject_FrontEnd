import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddFlightService } from 'src/app/Service/add-flight.service';

import { Flight } from '../Flight';

@Component({
  selector: 'app-flight-by-id',
  templateUrl: './flight-by-id.component.html',
  styleUrls: ['./flight-by-id.component.css']
})
export class FlightByIdComponent implements OnInit {

  flight:Flight=new Flight();
  id:any;
  flightId:number;
  viewTable:boolean = true;
  viewError:boolean = true;
  
  constructor( private addFlightService: AddFlightService, private Activatedroute:ActivatedRoute) {
    this.id=this.Activatedroute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
   
   this.onSearch();
   this.viewTable=true;
   this.viewError = true;
  
  }

  onSearch()
  { 
    this.viewTable= true;
    this.addFlightService.getFlightById(this.flightId).subscribe((data: any) =>{
      this.flight = data;
      console.log(this.flight)
      if(this.flightId == this.flight.flightId)
      {
      this.viewTable = false;
   
      }
      else
      {
        //console.log("hello");
        this.viewError=true;
      }
    }
      
    );
  
 
 
    
  }
  

}
