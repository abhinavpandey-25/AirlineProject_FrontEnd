import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = "http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }

  getAllUsers()
  {
    return this.http.get<any[]>(this.baseUrl+"/users");
  }

  createUser(User: User) {
    console.log("hi dude")
    console.log(this.http.post(`${this.baseUrl}`+'/addnewuser', User));
    
    return this.http.post(`${this.baseUrl}`+'/addnewuser', User);
   // return this.http.post("http://localhost:8090/api/v1/addFlight", flight)
   }

   loginUser(email:String, password:String)
   {
     
    //  console.log(this.http.get("http://localhost:8090/api/v1/users/"+email+"/"+password));
     return this.http.get("http://localhost:8090/api/v1/users/"+email+"/"+password);
   }
}

