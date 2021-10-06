import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFlightService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8095/api/v1";


  getFlightList(): any {
    //console.log(this.http.get(this.baseUrl + '/flights'));
    return this.http.get("http://localhost:8090/api/v1/flights");
  }

  public getFlightById(id: number) {
    //console.log(this.http.get<any>(this.baseUrl+ '/flights/' + id));
    console.log("hehre")
    return this.http.get("http://localhost:8090/api/v1/flights/" + id);
  }

  public addFlight(flight: Object): Observable<Object> {
    // console.log(this.http.post(`${this.baseUrl}`+'/addFlight', flight))
    //return this.http.post(`${this.baseUrl}`+'/addFlight', flight);
    return this.http.post("http://localhost:8090/api/v1/addFlight", flight)
  }

  public deleteFlight(id: number) {
    return this.http.delete("http://localhost:8090/api/v1/flightdelete/ " + id);
  }
  
  public loginAdmin(email:String, password:String)
  {
    return this.http.get("http://localhost:8090/api/v1/admin/"+email+"/"+password);
  }

}
