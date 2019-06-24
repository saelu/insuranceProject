import { Component, OnInit, Injectable } from '@angular/core';
import {AdminatorLoginComponent} from '../adminator-login/adminator-login.component';
import {AdministratorService} from '../administrator.service'
import { CustomerDetails } from './customerList'
import { Router } from '@angular/router';
import { EditcustomerComponent } from '../editcustomer/editcustomer.component';
import * as $ from 'jquery';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [AdministratorService]
})


export class CustomerlistComponent implements OnInit {
  customerData:CustomerDetails;
  active:boolean=false;
  deactive:boolean=false;
  contactDetails:CustomerDetails;
  message:String = null;
  userName:String;
  constructor(private service:AdministratorService,private router:Router) { 
     
  }

  ngOnInit() {
   

     this.getCustomerList();
   
  }
  getCustomerList(){
    this.service.getCustomerList().subscribe((data:any) =>{ this.customerData = data;
      
    });
  }
  goToCustomerDetails(customerToken:String){
    sessionStorage.setItem("customerToken",String(customerToken));
    this.router.navigate(['/adminview/editcustomer'])
  }
  deleteCustomer(customerDetail:CustomerDetails){
      
       if(confirm("Are you sure to delete !")) {
          this.service.deleteCustomer(customerDetail.customerId).subscribe(
            data => console.log('success', data),
            error => {
              $(window.location.reload()); 
              this.message= error.error.text; 
               });
      }
     
  }

  displayContactInfo(customerId:String){
         
        this.service.getCutomerDetailById(customerId).subscribe((contactDetails:any)=>{
          this.contactDetails = contactDetails;
        

        })
  }

  activateCustomerAccount(customerId:String){
    if(confirm("Are you sure !")) {
      this.service.activateCustomerAccount(customerId).subscribe(
        data => console.log('success', data),
        error => {
            $(window.location.reload()); 
         
          this.message= error.error.text; 
           });
    
    }
        

  }

}
