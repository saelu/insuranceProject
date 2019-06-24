import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UpdatePassword} from './updatePassword';
import { CustomerDetails } from 'src/app/administrator/customerlist/customerList';
import { CustomerService } from '../customer.service';
import * as $ from 'jquery';
import { LoginserviceService } from 'src/app/loginform/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updateCustomerPassword:UpdatePassword;
  checkPassword:String;
  customerDetail:CustomerDetails;
  checkmessage:boolean=false;
  message:String;
  tokenId:String;

  constructor(private service :CustomerService,private loginService:LoginserviceService,private router:Router) { }

  ngOnInit() {
      this.service.getCutomerDetailById().subscribe((customerDetails:any)=>{ this.customerDetail = customerDetails;
       
      
      });
  }

  updatePassword(form:NgForm){
    this.updateCustomerPassword = form.value;
    
     
      if(this.customerDetail.password ===this.updateCustomerPassword.oldPassword){
        if(this.updateCustomerPassword.newPassword ===this.updateCustomerPassword.confirmPassword){
           this.service.updatePassword(this.updateCustomerPassword).subscribe(
      data => console.log('success', data),
      error => {this.checkPassword= error.error.text;
              this.checkCustomerPassword();
         });
        }
        else{
          this.checkmessage=true;
          this.message="New password or confirm password not matched!"
        }

      }
      else{
        this.checkmessage=true;
        this.message="Old Password is incorrect!"
      }
  }
  checkCustomerPassword(){
 
    if(this.checkPassword==="updated"){
     $(window.location.reload()); 
     this.logout();
     
   }
 }
 logout(){
  this.loginService.logout();
  this.router.navigate(['/Login'])
}
}
