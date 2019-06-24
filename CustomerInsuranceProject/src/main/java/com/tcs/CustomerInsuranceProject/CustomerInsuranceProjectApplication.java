package com.tcs.CustomerInsuranceProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.tcs.CustomerInsuranceProject.controller","com.tcs.CustomerInsuranceProject.service","com.tcs.CustomerInsuranceProject.repository"})
public class CustomerInsuranceProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerInsuranceProjectApplication.class, args);
	}

}
