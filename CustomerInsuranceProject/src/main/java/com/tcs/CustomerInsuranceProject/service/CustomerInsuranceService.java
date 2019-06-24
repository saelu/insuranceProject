package com.tcs.CustomerInsuranceProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.CustomerInsurance;
import com.tcs.CustomerInsuranceProject.repository.CustomerInsuranceRepository;

@Service
public class CustomerInsuranceService {
	
	@Autowired
	private CustomerInsuranceRepository repository;
	
	public void addCustomerInfo(CustomerInfo customerInfo) {
		repository.save(customerInfo);
	}
	
	public void updateCustomerDetailByCustomer(String customerId, CustomerInfo customerInfo) {
		Optional<CustomerInfo> customerDetails = repository.findById(customerId);
		CustomerInfo customerDetail = customerDetails.get();
		customerDetail.setAnnualIncome(customerInfo.getAnnualIncome());
		customerDetail.setCustomerName(customerInfo.getCustomerName());
		customerDetail.setEmailId(customerInfo.getEmailId());
		customerDetail.setMaritalStatus(customerInfo.getMaritalStatus());
		customerDetail.setMobileNo(customerInfo.getMobileNo());
		customerDetail.setOccupation(customerInfo.getOccupation());
		customerDetail.setPassword(customerInfo.getPassword());
		customerDetail.setPhone(customerInfo.getPhone());
		customerDetail.setCustomerAddress(customerInfo.getCustomerAddress());
		repository.save(customerDetail);
	}	
	
	public void addInsuranceToCustomer(String customerId, CustomerInsurance insurance) {
		Optional<CustomerInfo> customerDetail = repository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		List<CustomerInsurance> insuranceDetail=customerInfo.getCustomerInsurance();
		if(insuranceDetail.isEmpty()) {
			insuranceDetail.add(0, insurance);
		}
		else {
			insuranceDetail.add(insurance);
		}
		customerInfo.setCustomerInsurance(insuranceDetail);
		repository.save(customerInfo);
	}

	public void deActivateCustomerAccount(String customerId) {
		Optional<CustomerInfo> customerDetail = repository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		customerInfo.setStatus("Deactivate");
		repository.save(customerInfo);
	}

}
