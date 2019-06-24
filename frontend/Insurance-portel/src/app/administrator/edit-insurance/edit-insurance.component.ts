import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../administrator.service'
import{InsuranceDetails} from '../insurancelist/insuranceList'

@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.css']
})
export class EditInsuranceComponent implements OnInit {
  insuranceDetails:any;
   message  = null;
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.service.getInsuranceDetailsById(params['insuranceId']).subscribe((insuranceDetails)=> this.insuranceDetails = insuranceDetails);
                                                                         
    });
}

editIsuranceDetails(editForm:InsuranceDetails){
     this.service.updateInsuranceDetail(editForm).subscribe( 
      data => console.log('success', data),
      error => {error.error.text;
       this.router.navigate(['/adminview/insuranceList']);

      });
}
}
