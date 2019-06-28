import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import{LoginserviceService} from '../loginform/loginservice.service';
import { Router }  from '@angular/router';
import{CustomerDetails} from '../administrator/customerlist/customerList';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  customerDetails:CustomerDetails;
  emailId:any;
  message:String;
  hide = true;
  constructor(private router: Router,private service:LoginserviceService) {


  }

  ngOnInit() {

  }


  onInput($event){
      $event.prevantDefault();

  }
  formSubmit(form:NgForm){

this.customerDetails = form.value;
    console.log(form.value)

    //  this.service.registerCustomer(this.customerDetails).subscribe(
    //   data => console.log('success', data),
    //   error => {this.emailId= error.error.text;
    //          this.checkCustomer();
    //      });

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
