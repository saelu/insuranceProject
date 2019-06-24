package com.tcs.CustomerInsuranceProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.CustomerInsuranceProject.model.CustomerAddress;
import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.CustomerInsurance;
import com.tcs.CustomerInsuranceProject.service.CustomerInsuranceService;

@RestController
public class CustomerInsuranceController {
	
	@Autowired
	private CustomerInsuranceService service;
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@PostMapping("/createCustomer")
	public String addCustomerInfo() {
		CustomerAddress address= new CustomerAddress("New Delhi","Delhi",110035);
		CustomerInfo customerInfo=new CustomerInfo("cust163", "Shivangi" , "female", 222222222, 222222222, "31-08-92",
				"Professor", 400000, "ANSJ123", "Indian", "anuj@gmail.com", "abc123","Unmarried", "Active",address);
		service.addCustomerInfo(customerInfo);
		return "Customer added successfully";
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@PutMapping("/updateCustomerDetailByCustomer/{customerId}")
	public String updateCustomerDetailByCustomer(@PathVariable("customerId") String customerId ) {
		CustomerAddress address= new CustomerAddress("New Delhi","Delhi",110035);
		CustomerInfo customerInfo=new CustomerInfo("Shailendra" , 222222222, 222222222,
				"Developer", 500000, "anuj@gmail.com", "abc123","Married",address);
		service.updateCustomerDetailByCustomer(customerId,customerInfo);
		return "Details updated succesfully";
	}

	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@PutMapping("/addInsurance/{customerId}")
	public String addInsuranceToCustomer(@PathVariable("customerId") String customerId ) {
		CustomerInsurance insurance = new CustomerInsurance("ins1214", "Property", "Home", 5,2500000, "Anuj", "Brother");
		service.addInsuranceToCustomer(customerId,insurance);
		return "Insurance added succesfully";
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@DeleteMapping("/deActivateCustomerAccount/{customerId}")
	public String deActivateCustomerAccount(@PathVariable("customerId") String customerId ) {
		service.deActivateCustomerAccount(customerId);
		return "Customer Account Deactivate Successfully";
	}
	
	
}
	

	
	
	

