import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddFlightService } from 'src/app/Service/add-flight.service';
import { Flight } from '../Flight';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  flight:Flight=new Flight();
  id:any;
  flightId:number;
  deleted:boolean = true;
  viewTable: boolean = true;
  viewError: boolean = true;

  constructor(private addFlightService: AddFlightService,private formBuilder: FormBuilder,  private Activatedroute:ActivatedRoute) {
    //this.id=this.Activatedroute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
   
    this.onSearch();
    this.deleteRow(this.flightId)
    this.deleted=true;
    this.viewTable = true;
  }
  onSearch()
  {this.deleted=true;
    this.viewTable = true;
    this.addFlightService.getFlightById(this.flightId).subscribe((data: any) =>{
      this.flight = data;
      console.log(this.flight)
      if(this.flightId == this.flight.flightId)
      {
      this.viewTable = false;
   
      }
      else
      {
        console.log("hello");
        this.viewError=true;
      }
      
    });
  }
  deleteRow(flightId:number)
  {
    this.addFlightService.deleteFlight(flightId).subscribe(
      data=> {console.log(data)}

    );
    this.deleted= false;
   
   
  }
  
    

}
