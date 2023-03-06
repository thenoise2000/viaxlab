package com.viaxlab.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.viaxlab.model.Activities;
import com.viaxlab.services.ActivitiesService;

@RestController
@RequestMapping(value="/api")
public class ActivitiesController {

	@Autowired
	private ActivitiesService activitiesService;

	@GetMapping("/activities")
	public ResponseEntity<List<Activities>> searchActivities() throws IOException {

		List<Activities> activities = activitiesService.readJSON();

		ResponseEntity<List<Activities>> responseEntity = new ResponseEntity<>(activities, HttpStatus.OK);

		return responseEntity;
	}



}
