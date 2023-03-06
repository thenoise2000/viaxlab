package com.viaxlab.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.viaxlab.model.Activities;

@Service
public class ActivitiesService {

	public List<Activities> readJSON() {

		ObjectMapper objectMapper = new ObjectMapper();
		TypeReference<List<Activities>> typeReference = new TypeReference<List<Activities>>() {};
		InputStream inputStream = TypeReference.class.getResourceAsStream("/json/activities.json");

		try {
			List<Activities> activities = objectMapper.readValue(inputStream, typeReference);
			return activities;
		}
		catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

}
