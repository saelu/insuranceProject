package com.tcs.CustomerInsuranceProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.CustomerInsuranceProject.model.CustomerAddress;
import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.InsuranceDetail;
import com.tcs.CustomerInsuranceProject.service.InsuranceDetailService;

@RestController
public class InsuranceDetailController {
	
	@Autowired
	private InsuranceDetailService service;
	
	/*Customer Related Operation*/	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@GetMapping("/getAllCustomer")
	public List<CustomerInfo> getCustomerDetail() {	
		return service.getCustomerDetail();
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@GetMapping("/getCustomerDetailById/{customerId}")
	public CustomerInfo getCustomerDetailById(@PathVariable("customerId") String customerId) {
		return service.getCustomerDetailById(customerId);
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@PutMapping("/updateCustomerDetailByAdministrator/{customerId}")
	public String updateCustomerDetailByCustomer(@PathVariable("customerId") String customerId ) {
		CustomerAddress address= new CustomerAddress("New Delhi","Madhya Pardesh",110035);
		CustomerInfo customerInfo=new CustomerInfo("Shailendra" , 222222222, 222222222,
				"Developer", 500000, "shailendra@gmail.com", "abc123343","Married",address);
		service.updateCustomerDetailByCustomer(customerId,customerInfo);
		return "Details updated succesfully";
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@DeleteMapping("/deleteCustomerAccount/{customerId}")
	public String deleteCustomerAccount(@PathVariable("customerId") String customerId ) {
		service.deleteCustomerAccount(customerId);
		return "Customer Account Delete Successfully";
	}
	
	/*Insurance Related Operation*/	
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@GetMapping("/getAllInsuranceDetails")
	public List<InsuranceDetail> getAllInsuranceDetails() {	
		return service.getAllInsuranceDetails();
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@GetMapping("/getInsuranceDetailById/{insuranceId}")
	public InsuranceDetail getInsuranceDetailById(@PathVariable("insuranceId") String insuranceId) {
		return service.getInsuranceDetailById(insuranceId);
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")	
	@PostMapping("/createNewInsurance")
	public String createNewInsurance() {
		InsuranceDetail insuranceDetail=new InsuranceDetail("insurance003", "Home Insurance" , 
										"Owner Property", 1,15044);
		service.createNewInsurance(insuranceDetail);
		return "Insurance Added to the list";
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@PutMapping("/updateInsuranceDetail/{insuranceId}")
	public String updateInsuranceDetail(@PathVariable("insuranceId") String insuranceId ) {
		InsuranceDetail insuranceDetail=new InsuranceDetail(1,25234);
		service.updateInsuranceDetail(insuranceId,insuranceDetail);
		return "Insurance updated succesfully";
	}
	
	@CrossOrigin(allowedHeaders= "*",allowCredentials="true")
	@DeleteMapping("/deleteInsuranceDetail/{insuranceId}")
	public String deleteInsuranceDetail(@PathVariable("insuranceId") String insuranceId ) {
		service.deleteInsuranceDetail(insuranceId);
		return "Insurance Deleted Successfully";
	}
	
}
