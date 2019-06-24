import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {LoginCstomer} from './loginCustomer';
import{CustomerDetails} from '../administrator/customerlist/customerList';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
 url = environment.baseUrl;
  tokenId:String
  constructor(private http: HttpClient,private router: Router) { }
 
   getAllCustomer(){
      let getCustomerListUrl = `${this.url}/getAllCustomer`;
      return this.http.get(getCustomerListUrl);
    
  }
  getToken(loginCstomer:LoginCstomer){
    let getCustomerListUrl1 = `${this.url}/token`;
  
    return this.http.post(getCustomerListUrl1,loginCstomer);
  }
  registerCustomer( customerDetails:CustomerDetails):Observable<String>{
    
    let getCustomerListUrl1 = `${this.url}/createCustomer`;
     return this.http.post<String>(getCustomerListUrl1,customerDetails);
  }

logout(){
    localStorage.removeItem('currentUser');
  }

  
}
