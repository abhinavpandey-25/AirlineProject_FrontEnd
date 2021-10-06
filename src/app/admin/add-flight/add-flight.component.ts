import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddFlightService } from 'src/app/Service/add-flight.service';
import { Flight } from '../Flight';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addFlight1: FormGroup;
  added:boolean = true;
  submitted:boolean = false;
  msg:string;

  constructor(private addFlightService: AddFlightService,private formBuilder: FormBuilder) { }
  ngOnInit():void {
    this.addFlight1 = this.formBuilder.group({
  
      flightName: ['', Validators.required],
      source: ['',Validators.required],
      destination: ['',Validators.required],
      departureDate:['',Validators.required],
      departureTime:['',Validators.required],
      arrivalDate:['',Validators.required],
      arrivalTime:['',Validators.required],
      economicSeats: ['',Validators.required],
      businessSeats: ['',Validators.required],
      economyCost:['',Validators.required],
      businessCost:['',Validators.required]

    });
  }


  onSubmit() {
    console.log("SUBMIT");
    this.submitted = true;
    if (this.addFlight1.invalid) {
      return;
    }
    this.addFlightService.addFlight(this.addFlight1.value).subscribe((data:any) => {
      this.msg=data;
     this.addFlight1.reset();
    });

    this.added=!this.added;
  }
  
  

    



}