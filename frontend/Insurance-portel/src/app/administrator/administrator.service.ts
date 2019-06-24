import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetails} from './customerlist/customerList'
import{InsuranceDetails} from '../administrator/insurancelist/insuranceList'
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
 
  constructor(private http: HttpClient) {}
 
  url = environment.baseUrl;

  getCustomerList(){
    let getCustomerListUrl = `${this.url}/getAllCustomer`;
    return this.http.get(getCustomerListUrl);
  }

  getInsuranceList(){
    let getInsuranceListUrl = `${this.url}/getAllInsuranceDetails`;
    return this.http.get(getInsuranceListUrl);
  }
  
  getCutomerDetailById(customerId: String) {
    let getCustomerByIdUrl = `${this.url}/getCustomerDetailById`;

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'customerId': String(customerId)
    });
    let options=  {
         headers:httpHeaders
    };
    
    return this.http.get(getCustomerByIdUrl,options);

}
getInsuranceDetailsById(insuranceId:String):Observable<InsuranceDetails>{
  let getInsuranceById = `${this.url}/getInsuranceDetailById`;
  let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'insuranceId': String(insuranceId)
  });
  let options=  {
       headers:httpHeaders
  };
  return this.http.get<InsuranceDetails>(getInsuranceById,options);
}
updateCustomerDetail(customerData:CustomerDetails){
  let updateCustomer = `${this.url}/updateCustomerDetailByAdministrator`;
 
  let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'customerId': String(customerData.customerId)
  });
  let options=  {
       headers:httpHeaders
  };
   return this.http.put(updateCustomer,JSON.stringify(customerData),options);
}
updateInsuranceDetail(insuranceData:InsuranceDetails):Observable<Number>{

let updateInsurance = `${this.url}/updateInsuranceDetail`;
let httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'insuranceId': String(insuranceData.insuranceId)
});
let options=  {
     headers:httpHeaders
};
return this.http.put<Number>(updateInsurance,JSON.stringify(insuranceData),options);

}
deleteCustomer(customerId:String):Observable<Number>{
  let deleteCustomer = this.url+"/deleteCustomerAccount";
  let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'customerId': String(customerId)
  });
  let options=  {
       headers:httpHeaders
  };
  return this.http.delete<Number>(deleteCustomer,options);
}
activateCustomerAccount(customerId){
  sessionStorage.setItem("customerId",String(customerId))
  let activateCustomerAccountUrl = this.url+"/activateCustomerAccount";
  let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'customerId': customerId
  }); 
  let options=  {
       headers:httpHeaders
  };
  return this.http.put(activateCustomerAccountUrl,'',options);
}
addNewInsurance(insuranceData:InsuranceDetails):Observable<InsuranceDetails>{
  
  let addNewInsurance = this.url+"/createNewInsurance";
   return this.http.post<InsuranceDetails>(addNewInsurance,insuranceData);

}
deleteInsurance(insuranceId:String):Observable<Number>{
  let deleteInsurance = this.url+"/deleteInsuranceDetail";

  let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'insuranceId': String(insuranceId)
  }); 
  let options=  {
       headers:httpHeaders
  };
  return this.http.delete<Number>(deleteInsurance,options);
}
}
