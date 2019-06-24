import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import{HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { MatRippleModule,MatButtonModule,MatMenuModule, MatToolbarModule,
        MatIconModule,MatCardModule 
} from '@angular/material';
import {RegistrationComponent,LoginformComponent,ServererrorComponent,
  PathnotfoundComponent,HomepageComponent,DashboardComponent,FooterComponent,HeaderComponent,
  LoginserviceService,TokenInterceptorService
} from ".";

import {AddnewinsuranceComponent,CustomerlistComponent,InsurancelistComponent,
  EditcustomerComponent,EditInsuranceComponent,AdminatorLoginComponent,
  AdministratorService,DataService
} from './administrator';

import {CustomerdetailsComponent,UpdatecustomerdetailsComponent,
  AddNewInsuranceByCustomerComponent,SelectinsuranceComponent, 
  CustomerDashboardComponent, InsuranceListComponent,UpdatePasswordComponent,
  VehicleinsurancelistComponent,HomeinsurancelistComponent,LifeinsurancelistComponent,
  InsuranceofferComponent
} from './Customer';
import { Error500Component } from './shared/error/error500/error500.component'



@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent, 
    InsurancelistComponent,
    AdminatorLoginComponent,
    LoginformComponent,
    HomepageComponent,
    AddnewinsuranceComponent,
    CustomerdetailsComponent,
    UpdatecustomerdetailsComponent,
    InsuranceofferComponent,
    EditcustomerComponent,
    VehicleinsurancelistComponent,
    HomeinsurancelistComponent,
    LifeinsurancelistComponent,
    EditInsuranceComponent,
    FooterComponent,
    HeaderComponent,
    RegistrationComponent,
    AddNewInsuranceByCustomerComponent,
    SelectinsuranceComponent,
    CustomerDashboardComponent,
    DashboardComponent,
    InsuranceListComponent,
    UpdatePasswordComponent,
    ServererrorComponent,
    PathnotfoundComponent,
    Error500Component,
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,HttpClientModule,MatRippleModule,MatButtonModule,MatMenuModule, MatToolbarModule,MatIconModule,MatCardModule,BrowserAnimationsModule              
  ],
  providers: [AdministratorService,DataService,LoginserviceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
