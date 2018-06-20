package com.uichallenge.solution.UIChallenge;

import org.json.JSONException;
import org.json.JSONObject;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MathmaticalCalculationController {
	
	//There is a problem with the current version of Angular 1.6.x
	//I kept getting a 400 Bad Request using the stadard way of creating a Circle
	//Request Body Not found error
	@PostMapping("/api/v1/math/circumference")
	public String getApplicationInfo(@RequestBody String jsonStr) {
		
		JSONObject json = new JSONObject();
		JSONObject requestObj = null;
		
		try {
			requestObj = new JSONObject(jsonStr);
			
			Circle circle = new Circle(requestObj.getDouble("radius"));
			
			json.put("circumference", circle.getCircumference());
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return json.toString();
	
	}
	
	
}
