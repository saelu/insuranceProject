import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router'; 
import { NgForm } from '@angular/forms';
import{LoginCstomer} from './loginCustomer';
import {LoginserviceService} from './loginservice.service';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
  
})
export class LoginformComponent implements OnInit {
  loginCstomer:LoginCstomer; 
  customerId:any;
  customerDetils:[];
  message:String;
  ckeck:boolean;
  errorStatus:number;
  returnUrl: string;
  constructor(private router: Router,private service:LoginserviceService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
      
}
    
   
   formSubmit(form:NgForm){
     this.loginCstomer=form.value
    this.service.getToken(this.loginCstomer).subscribe(
              data => console.log('success', data),
              error => {this.customerId= error.error.text;
                      this.errorStatus= error.status;   
                     
                      this.checkCustomer();    
                 });
                 
  

   }

   checkCustomer(){
     if(this.customerId ==="Not Found"){
       console.log("Not Found======",this.customerId)

       this.message = "Username or Password are incorrect!"
     }
       
     else if(this.customerId ==="Deactivate"){
      console.log("Deactivate ======",this.customerId)
      this.message = "Your Account is Deactivated!"
    }
    else if(this.customerId ==="Not registered"){
      
      this.message = "Your email is Not registered!"
    }
    
    else if(this.errorStatus == 0){
        
      this.router.navigate(['/error'])
    }
    else if(this.errorStatus == 500){
        
      this.router.navigate(['/error500'])
    }

     else 
     {

       localStorage.removeItem("currentUser")
       localStorage.setItem('currentUser',this.customerId);
      
       var decoded = jwt_decode(this.customerId); 
        var pattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
         if(decoded.sub.startsWith('admin') && decoded.sub!=pattern){

           this.router.navigate(['/adminview'])
         }
         else{
          this.router.navigate(['/customerDashboard']);
         }
       
     }  

   }  
}
 