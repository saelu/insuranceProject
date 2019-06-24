import { Component, OnInit } from '@angular/core';
import {InsuranceCategory} from '../../administrator/addnewinsurance/insurancetype';
import { Router , ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import{CustomerService} from '../customer.service';
import {CustomerInsurance} from './addNewInsurance';
@Component({
  selector: 'app-add-new-insurance-by-customer',
  templateUrl: './add-new-insurance-by-customer.component.html',
  styleUrls: ['./add-new-insurance-by-customer.component.css'],
  providers: []
})
export class AddNewInsuranceByCustomerComponent implements OnInit {
 
  
  insuranceCategory:InsuranceCategory[];

  insuranceId:String;
  insuranceDetailsCheck:boolean = false;
  insuranceDetails:CustomerInsurance;
  constructor(private route:ActivatedRoute,private service:CustomerService,private router:Router) {
    

   }
   ngOnInit() {
    this.route.params.subscribe(params =>{
      
      this.service.getInsuranceDetailsById(params['insuranceId']).subscribe((insuranceDetails:any)=> {
       
        this.insuranceDetails = insuranceDetails;
        this.insuranceDetailsCheck=true;
      
      
      });
    })
  }
  
addNewIsurance(addNewInsurance:NgForm){
  
  this.insuranceDetails = addNewInsurance.value;
  this.service.addNewInsurance(this.insuranceDetails).subscribe( 
    data => console.log('success', data),
    error => {error.error.text;
     this.router.navigate(['/customerDashboard/insurancelist']);
    });
}
}
