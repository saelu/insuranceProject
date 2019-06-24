import { Injectable } from '@angular/core';
import {InsuranceType,InsuranceCategory} from './insurancetype'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getInsuranceType(){
      return [
        new InsuranceType('Home Insurance'),
        new InsuranceType('Life Insurance'),
        new InsuranceType('Vehicle Insurance'),

      ]; 
  }
  getInsuranceCategory(){
    return [

           new InsuranceCategory('Home Insurance','Homeowners'),
           new InsuranceCategory('Home Insurance','Renters'),
           new InsuranceCategory('Life Insurance','Term Life'),
           new InsuranceCategory('Life Insurance','Whole Life'),
           new InsuranceCategory('Life Insurance','Universal Life'),
           new InsuranceCategory('Vehicle Insurance','Four Wheeler'),
           new InsuranceCategory('Vehicle Insurance','Two Wheeler'),
    ];
  }
}
