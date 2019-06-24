import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../administrator.service'
import {InsuranceDetails} from './insuranceList'
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-insurancelist',
  templateUrl: './insurancelist.component.html',
  styleUrls: ['./insurancelist.component.css'],
  providers: [AdministratorService]
})
export class InsurancelistComponent implements OnInit {
  insuranceData:{};
  message:String = null;
  constructor(private service:AdministratorService, private router:Router ) { }

  ngOnInit() {
    this.service.getInsuranceList().subscribe(data => this.insuranceData = data);
  }
  goToInsuranceDetails(insuranceDetails:InsuranceDetails){
    this.router.navigate(['/adminview/editinsurance', insuranceDetails.insuranceId])
  } 
  deleteInsurance(insuranceDetails:InsuranceDetails){
    if(confirm("Are you sure to delete !")){
      this.service.deleteInsurance(insuranceDetails.insuranceId).subscribe(
        data => console.log('success', data),
        error => {
          this.message= error.error.text; 
          $(window.location.reload()); 
 
           });
    }
    
  }
  
}
