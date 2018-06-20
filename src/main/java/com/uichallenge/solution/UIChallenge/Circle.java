package com.uichallenge.solution.UIChallenge;

public class Circle {
	private double radius;
	
	//For Deserialization
	public Circle() {} 
	
	public Circle(double radius) {
		this.radius = radius;
	}
	
	public double getCircumference() {
		return 2 * Math.PI * this.radius;
	};
	
}
