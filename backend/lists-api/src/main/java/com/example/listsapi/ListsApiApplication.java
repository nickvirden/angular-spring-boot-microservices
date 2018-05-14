package com.example.boardsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ListsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ListsApiApplication.class, args);
	}
}
