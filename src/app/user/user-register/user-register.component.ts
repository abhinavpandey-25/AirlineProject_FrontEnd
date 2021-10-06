import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Service/user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User = new User();
  submitted:boolean = false;
  userForm: FormGroup;

  msg:string;
  
  
  constructor(private userService:UserService, private formBuilder: FormBuilder, private router:Router) { }

  
  
  ngOnInit() {
    this.userForm = new FormGroup({
      title:new FormControl('',Validators.required),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl  ('',Validators.required),
      password:new FormControl ('',[Validators.required, Validators.minLength(8)]),
      // confirmPassword:new FormControl ('',[Validators.required, Validators.minLength(8)]),
      email:new FormControl ('',[Validators.required, Validators.email]),
      phoneNumber:new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dob:new FormControl('',Validators.required)
  });
}

onSubmit() {
  console.log("SUBMIT");
  this.submitted = true;
  console.log(this.userForm.value)
  console.log(this.userForm.invalid)
  if (this.userForm.invalid){
    return;
  }
  this.userService.createUser(this.userForm.value).subscribe((data:any) => {
    console.log("hi i am here")
    this.msg = data;
    console.log("here");    
  });  
  this.userForm.reset()
 this.router.navigateByUrl("userLogin")
}

// public goBack()
// {
//   console.log("inside go back");
//    this.router.navigate(['/userLogin']);
// }
}




