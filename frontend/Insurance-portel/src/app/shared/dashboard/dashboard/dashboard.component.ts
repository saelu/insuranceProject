import { Component, OnInit} from '@angular/core';
import * as $ from "jquery";
import { LoginserviceService } from 'src/app/loginform/loginservice.service';
import { Router} from '@angular/router';
import { CustomerService } from 'src/app/Customer/customer.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {



tokenId:String;



  constructor(private loginService:LoginserviceService, private router:Router,private service :CustomerService) { }
   
  ngOnInit() {
    $(function() {
      $('.close').click(function() {
        $('.ad').css('display', 'none');
      })
    });
    $(document).ready(function() {
      $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
      });
    });
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/Login'])
    
  }
  deactivateAccount(){

   
    if(confirm("Are you sure !")){
      
      this.service.deactiveAccount().subscribe(
       data => console.log('success', data),
       error => {
        
         console.log(error.error.text); 
         this.logout();
         this.router.navigate(['/Login']);

          });
         }
  }

}
