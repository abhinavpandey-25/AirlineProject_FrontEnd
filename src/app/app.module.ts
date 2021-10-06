import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './Service/user.service';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { DeleteFlightComponent } from './admin/delete-flight/delete-flight.component';
import { FlightByIdComponent } from './admin/flight-by-id/flight-by-id.component';
import { FlightListComponent } from './admin/flight-list/flight-list.component';
import { AddFlightService } from './Service/add-flight.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { SearchFlightComponent } from './user/search-flight/search-flight.component';
import { PassengerComponent } from './user/passenger/passenger.component';
import { PaymentComponent } from './user/payment/payment.component';
import { ViewBookingComponent } from './user/view-booking/view-booking.component';
import { ShowpassengersComponent } from './showpassengers/showpassengers.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    HomeComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    FlightByIdComponent,
    FlightListComponent,
    HomeDashboardComponent,
    AdminLoginComponent,
    UserNavComponent,
    AdminNavComponent,
    ContactUsComponent,
    AboutUsComponent,
    SearchFlightComponent,
    PassengerComponent,
    PaymentComponent,
    ViewBookingComponent,
    ShowpassengersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [UserService, AddFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
