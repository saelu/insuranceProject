import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/administrator/customerlist/customerList';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  insuranceList:boolean=false;
  tokenId:String;
  customerDetail:CustomerDetails;
  constructor(private service :CustomerService) { }

  ngOnInit() {
    this.service.getCutomerDetailById().subscribe((customerDetails:any)=>{ this.customerDetail = customerDetails;
                                                                                                  
      this.checkInsuranceDetails();
      


});
  }
  checkInsuranceDetails(){
    if(this.customerDetail.customerInsurance.length>0){
      this.insuranceList=true;
    }
  }

}
