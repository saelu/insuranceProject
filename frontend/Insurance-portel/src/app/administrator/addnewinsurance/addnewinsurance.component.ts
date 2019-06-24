import { Component, OnInit } from '@angular/core';
import {DataService} from './dataservice.service'
import {InsuranceType,InsuranceCategory} from './insurancetype'
import {InsuranceDetails} from '../insurancelist/insuranceList'
import{AdministratorService} from '../administrator.service'
import { Router , ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-addnewinsurance',
  templateUrl: './addnewinsurance.component.html',
  styleUrls: ['./addnewinsurance.component.css'],
  providers: [DataService]
})
export class AddnewinsuranceComponent implements OnInit {
  selectedInsurance:InsuranceType = new InsuranceType('Home'); 
  insuranceType:InsuranceType[]
  insuranceCategory:InsuranceCategory[]
  constructor(private _dataservices:DataService, private service:AdministratorService,private router:Router) {
    this.insuranceType =this._dataservices.getInsuranceType();
   }
    
   onSelect(insuranceID:any){
    this.insuranceCategory = this._dataservices.getInsuranceCategory().filter((item)=> item.insuranceID == insuranceID);
   }
  ngOnInit() {
  }
  addNewIsurance(editForm:InsuranceDetails){

      this.service.addNewInsurance(editForm).subscribe( 
        data => console.log('success', data),
        error => {error.error.text;
         this.router.navigate(['/adminview/insuranceList']);
  
        });
       
  }

}
