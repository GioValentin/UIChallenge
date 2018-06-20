package com.uichallenge.solution.UIChallenge;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UIChallengeController {
	
	@RequestMapping("/")
	public ModelAndView index() {
		return new ModelAndView("hello");
	}
	
	@RequestMapping("/demo-get-task")
	public ModelAndView demoGetTask() {
		return new ModelAndView("getRequestTask");
	}
	
	@RequestMapping("/demo-post-task")
	public ModelAndView demoPostTask() {
		return new ModelAndView("postRequestTask");
	}
	

}
