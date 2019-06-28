import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/administrator/customerlist/customerList';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  insuranceList:boolean=false;
  tokenId:String;
  successMessage:String;
  message:String;
  errorMessage:String
  customerDetail:CustomerDetails;
  constructor(private service :CustomerService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.successMessage = this.route.snapshot.queryParams['Updatemessage'] || '/';
    this. messageSend();
    this.service.getCutomerDetailById().subscribe((customerDetails:any)=>{ this.customerDetail = customerDetails;
                                                                                                  
      this.checkInsuranceDetails();
      


});
  }
  
  checkInsuranceDetails(){
    if(this.customerDetail.customerInsurance.length>0){
      this.insuranceList=true;
    }
  }
  messageSend(){
    console.log(this.successMessage)
    if(this.successMessage ==="success"){
      this.errorMessage =null
      this.message = 'Insurance added successfully !'
      
    }
    else if(this.successMessage==='failure'){
      this.message = null
      this.errorMessage='Something went wrong please try again !';
    }
   
  }
  

}
