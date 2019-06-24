package com.tcs.CustomerInsuranceProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.InsuranceDetail;
import com.tcs.CustomerInsuranceProject.repository.CustomerInsuranceRepository;
import com.tcs.CustomerInsuranceProject.repository.InsuranceDetailRepository;

@Service
public class InsuranceDetailService {
	@Autowired
	private CustomerInsuranceRepository customerRepository;
	
	@Autowired
	private InsuranceDetailRepository insuranceRepository;

	/*Customer Related Operations*/
	
	public List<CustomerInfo> getCustomerDetail() {
		return customerRepository.findAll();
	}

	public CustomerInfo getCustomerDetailById(String customerId) {
		Optional<CustomerInfo> customerDetail = customerRepository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		return customerInfo;
	}

	public void updateCustomerDetailByCustomer(String customerId, CustomerInfo customerInfo) {
		Optional<CustomerInfo> customerDetails = customerRepository.findById(customerId);
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
		customerRepository.save(customerDetail);
	}	
	
	public void deleteCustomerAccount(String customerId) {
		Optional<CustomerInfo> customerDetail = customerRepository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		customerRepository.delete(customerInfo);
	}
	
	/*Insurance Related Operation*/	
	
	public List<InsuranceDetail> getAllInsuranceDetails() {
		return insuranceRepository.findAll();
	}

	public InsuranceDetail getInsuranceDetailById(String insuranceId) {
		Optional<InsuranceDetail> insuranceDetails = insuranceRepository.findById(insuranceId);
		InsuranceDetail insuranceInfo = insuranceDetails.get();
		return insuranceInfo;
	}
	
	public void createNewInsurance(InsuranceDetail insuranceDetail) {
		insuranceRepository.save(insuranceDetail);
	}
	
	public void updateInsuranceDetail(String insuranceId, InsuranceDetail insuranceDetail) {
		Optional<InsuranceDetail> insuranceDetails = insuranceRepository.findById(insuranceId);
		InsuranceDetail insuranceInfo = insuranceDetails.get();
		insuranceInfo.setAmount(insuranceDetail.getAmount());
		insuranceInfo.setCoveragePeriod(insuranceDetail.getCoveragePeriod());
		insuranceRepository.save(insuranceInfo);
	}

	public void deleteInsuranceDetail(String insuranceId) {
		Optional<InsuranceDetail> insuranceDetail = insuranceRepository.findById(insuranceId);
		InsuranceDetail insuranceInfo = insuranceDetail.get();
		insuranceRepository.delete(insuranceInfo);
	}
	
}
