package com.uichallenge.solution.UIChallenge;

import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationDiagnosticController {
	
	@GetMapping("/api/v1/application/info")
	public String getApplicationInfo() {
		
		JSONObject json = new JSONObject();
		
		try {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");  
			LocalDateTime now = LocalDateTime.now(); 
			
			json.put("date", dtf.format(now));
			
			String appName = "UIChallenge";
			json.put("name", appName);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return json.toString();
	
	}

}
