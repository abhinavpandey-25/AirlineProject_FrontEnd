import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteFlightComponent } from './admin/delete-flight/delete-flight.component';
import { FlightByIdComponent } from './admin/flight-by-id/flight-by-id.component';
import { FlightListComponent } from './admin/flight-list/flight-list.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ShowpassengersComponent } from './showpassengers/showpassengers.component';
import { PassengerComponent } from './user/passenger/passenger.component';
import { PaymentComponent } from './user/payment/payment.component';
import { SearchFlightComponent } from './user/search-flight/search-flight.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserComponent } from './user/user.component';
import { ViewBookingComponent } from './user/view-booking/view-booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'adminLogin', component:AdminLoginComponent},
  {path:'admin', component:AdminComponent,
  children:[{ path: 'addFlight', component: AddFlightComponent },
  { path: 'deleteFlight', component: DeleteFlightComponent },
  { path: 'showFlights', component: FlightListComponent },
  { path: 'searchFlight', component: FlightByIdComponent },
  { path: 'showUsers', component: UserComponent },]},
  {path:'userDash',component:UserDashboardComponent},
  { path: 'userList', component: UserComponent },
  { path: 'userReg', component: UserRegisterComponent },
  { path: 'userLogin', component: UserLoginComponent },
  {path:'contactUs', component:ContactUsComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'payments', component:PaymentComponent},
  {path:'searchFlight', component:SearchFlightComponent},
  {path:'passengers', component:PassengerComponent},
  {path:'viewBooking',component:ViewBookingComponent},
  {path:'showPassengers/:bookingID',component:ShowpassengersComponent}
  
  

 
 
  // {
  //   path:'homeLink',
  //   component:HomeComponent,
  //   children:[
  //     {
  //       path:"child1",component:Child1Component
  //     },
  //     {
  //       path:"child2",component:Child2Component
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
