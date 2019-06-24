import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{LoginserviceService} from '../loginform/loginservice.service';
import { Router }  from '@angular/router'; 
import{CustomerDetails} from '../administrator/customerlist/customerList';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customerDetails:CustomerDetails;
  emailId:any;
  message:String;
  constructor(private router: Router,private service:LoginserviceService) { }

  ngOnInit() {
   
  }
  onInput($event){
      $event.prevantDefault();
      console.log("dfsdffs"+ $event.target.value)
  }
  formSubmit(form:NgForm){
    
this.customerDetails = form.value;

     this.service.registerCustomer(this.customerDetails).subscribe(
      data => console.log('success', data),
      error => {this.emailId= error.error.text;
             this.checkCustomer();    
         });

  }
  checkCustomer(){
    console.log(this.emailId)
    if(this.emailId ==="Exists"){

      this.message = "Customer Already exists!"
    }
    else if(this.emailId ==="Saved"){
      
       this.router.navigate(['Login']);
    }
  }

}
