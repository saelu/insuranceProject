import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import {RegistrationComponent,LoginformComponent,ServererrorComponent,
  PathnotfoundComponent,HomepageComponent
} from "./index";
import {AddnewinsuranceComponent,CustomerlistComponent,InsurancelistComponent,
  EditcustomerComponent,EditInsuranceComponent
} from './administrator';
import {CustomerdetailsComponent,UpdatecustomerdetailsComponent,
  AddNewInsuranceByCustomerComponent,SelectinsuranceComponent, 
  CustomerDashboardComponent, InsuranceListComponent,UpdatePasswordComponent,
  InsuranceofferComponent
} from './Customer'
import { Error500Component } from './shared/error/error500/error500.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  { path: 'Login', component: LoginformComponent },
  {path:"register" ,component:RegistrationComponent},
  {path:"insuranceoffer", component:InsuranceofferComponent},
  {path:"homePage",component:HomepageComponent},
  {path:"error",component:ServererrorComponent},
  {path:"error500",component:Error500Component},
  {path:'Pathnotfound',component:PathnotfoundComponent},
  {path: 'adminview',canActivate:[AuthGuard],
 
  
children:[
            {
              path:'',
              component:CustomerlistComponent
            },
           {
             path:'customerList',
             component:CustomerlistComponent
            
           },

           {path:"insuranceList",
           component:InsurancelistComponent
          },
          {
            path:"editcustomer",
          component:EditcustomerComponent
        },
        {
          path:"editinsurance/:insuranceId" ,
          component:EditInsuranceComponent
        },
        
        {
          path:"addnewinsurance", 
        component: AddnewinsuranceComponent
      },
]

},
 
 {path:'customerDashboard' ,canActivate:[AuthGuard],
 
 children:[
  {  path:'',
     component:CustomerDashboardComponent
  },
  {
    path:"customerdetails", 
    component: CustomerdetailsComponent
  
  },
  {
   path:"insurancelist",
   component:InsuranceListComponent

  },
  {path:"updatecustomerdetails",
   component:UpdatecustomerdetailsComponent
  },
  {
    path:"selectInsurance", 
  component:SelectinsuranceComponent
},
{
  path:"updatePassword",
  component:UpdatePasswordComponent
},

{path:"addNewInsuranceByCustomer/:insuranceId", 

component:AddNewInsuranceByCustomerComponent}
 ]

 }
 ,{
   path:'**',
   component:PathnotfoundComponent
 }
 ];

@NgModule({
 
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
