import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerDetails} from '../../administrator/customerlist/customerList';



import { LoginserviceService } from 'src/app/loginform/loginservice.service';



@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css'],
  providers: [CustomerService]
})

export class CustomerdetailsComponent implements OnInit {
  customerDetail:CustomerDetails;
  contactDetails:boolean=false;
  personalDetails:boolean=false;
  insuranceList:boolean=false;
  checkPassword:String;
  message:String;
  sussessMessage:String;
  checkmessage:boolean=false;
  

  tokenId:String;
  constructor(private router:Router,private route:ActivatedRoute,private service :CustomerService,private loginService:LoginserviceService) { }

  ngOnInit() {
    this.tokenId = localStorage.getItem('currentUser');

      this.service.getCutomerDetailById().subscribe((customerDetails:any)=>{ this.customerDetail = customerDetails;
                                                                                                  
        this.contactDetails=true;
        this.personalDetails=true;
        this.checkInsuranceDetails();
        


});
                                                                              
   
   
  }
  checkInsuranceDetails(){
   
    if(this.customerDetail.customerInsurance.length>0){
      this.insuranceList=true;
    }
  }
  addNewInsurance(){
      this.router.navigate(['customerDashboard/selectInsurance']);
  }
 

  updateCustomerDetails(customerId:String){
    this.router.navigate(['customerDashboard/updatecustomerdetails'])
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/Login'])
  }

}
