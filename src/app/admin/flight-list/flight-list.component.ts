import { Component, OnInit } from '@angular/core';
import { AddFlightService } from 'src/app/Service/add-flight.service';
import { Flight } from '../Flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flightList:Flight[] = [];
  flight:any;
  constructor(private addFlightService: AddFlightService) { }

  ngOnInit(): void {
 
    this.getFlightList();
  }
  public getFlightList(){
    this.addFlightService.getFlightList().subscribe((data: Flight[]) => {
      this.flightList = data;
    });

}
}
