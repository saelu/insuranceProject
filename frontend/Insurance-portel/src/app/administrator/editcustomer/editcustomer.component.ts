import { Component, OnInit,Injectable } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../administrator.service'
import { CustomerDetails, CustomerInsurance } from '../customerlist/customerList';
import {UpdateCustomerDetails} from '../../administrator/editcustomer/updatecustome';



@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css'],
  providers: [AdministratorService]
})

@Injectable()
export class EditcustomerComponent implements OnInit {

  customerData:any
  customerAddress:String
  insuranceDetail:CustomerInsurance[];
  insuranceList:boolean=false;
  contactDetails:boolean=false;
  personalDetails:boolean=false;
  customerDetail:CustomerDetails;
  updateCustomer = new UpdateCustomerDetails();
  customerTokenId:String;
  message = '';
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.customerTokenId = sessionStorage.getItem('customerToken');
      this.service.getCutomerDetailById(this.customerTokenId).subscribe(customerData => { this.customerData = customerData;
                                                                                          this.contactDetails=true;
                                                                                          this.personalDetails=true;
                                                                                          // this.customedsfrData();
                                                                                          this.getInsuranceDetail()});
      


  }

  getInsuranceDetail(){
    if(this.customerData.customerInsurance.length>0){
      this.insuranceList=true;
      this.insuranceDetail=this.customerData.customerInsurance;
     
    }
  }

  editDetails(editForm:CustomerDetails){
   
     this.service.updateCustomerDetail(editForm).subscribe( 
       data => console.log('success', data),
       error => { this.message = error.error.text;
        this.router.navigate(['/adminview/customerList']);

       });
   
  }
}
