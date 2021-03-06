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
	
	@GetMapping("/api/v1/application/system")
	public String getApplicationSystem() {
		
		System sys = new System();
		
		JSONObject json = new JSONObject();
		
		JSONObject RAM = new JSONObject();
		JSONObject CPU = new JSONObject();
		JSONObject HDD = new JSONObject();
		
		try {
			RAM.put("used", sys.getUsedRAM());
			RAM.put("total", sys.getTotalRAM());
			
			CPU.put("used", sys.getCPULoad());
			
			HDD.put("used", sys.getUsedHDD());
			HDD.put("total", sys.getTotalHDD());
			
			json.put("RAM", RAM);
			json.put("CPU", CPU);
			json.put("HDD", HDD);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return json.toString();
	
	}
	
	

}
