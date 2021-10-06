import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFlightService } from 'src/app/Service/add-flight.service';
import { Admin } from '../Admin';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // email:String = '';
  // password:String = '';
  admin:Admin=new Admin();
  bol:boolean = false;
  adminForm: FormGroup;
  submitted:boolean = false;
  
  constructor(private addFlight:AddFlightService, private router:Router) { }

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      email:new FormControl ('',[Validators.required, Validators.email]),
      password:new FormControl ('',[Validators.required, Validators.minLength(6)]),
    })
  }

  loginAdmin()
  {
    this.submitted = true;
  
    if (this.adminForm.invalid){
      return;
    }
    // console.log(this.email,this.password);
    console.log(this.adminForm.value);
    console.log(this.bol)
    this.addFlight.loginAdmin(this.adminForm.value.email,this.adminForm.value.password).subscribe((data:any)=>{
      this.admin=data;
      if(this.admin.email == this.adminForm.value.email && this.admin.password ==this.adminForm.value.password)
      {
        localStorage.setItem('adminId',this.admin.adminId.toString());
        console.log(localStorage.getItem('adminId'));    
        this.router.navigateByUrl("admin/addFlight");
      }
      else
      {
        this.bol = true;
      }
      console.log(this.bol)
    });
   
    
  }

}
