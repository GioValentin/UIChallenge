package com.uichallenge.solution.UIChallenge;

import java.io.File;
import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;

public class System {
	private long totalRAM;
	private long usedRAM;
	private long usedHDD; 
	private long totalHDD;  
	private double cpuLoad;  
	
	public System () {
		this.totalHDD = 0;
		this.usedRAM = 0;
		this.usedHDD = 0;
		this.totalHDD = 0;
		this.cpuLoad = 0;
	}
	
	public void setCPULoad() {
		OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(
                OperatingSystemMXBean.class);
		this.cpuLoad = osBean.getSystemLoadAverage();
		
	}
	
	public double getCPULoad() {
		return this.cpuLoad;
	}
	
	public void setTotalHDD() {
		File file = new File("/");
		
		this.totalHDD = file.getTotalSpace();
	}
	
	public long getTotalHDD() {
		return this.totalHDD;
	}
	
	public void setUsedHDD() {
		File file = new File("/");
		
		this.usedHDD = file.getFreeSpace() - file.getTotalSpace();
	}
	
	public long getUsedHDD() {
		return this.usedHDD;
	}
	
	public void setTotalRAM() {
		// get Runtime instance
		Runtime instance = Runtime.getRuntime();
		this.totalRAM = instance.totalMemory();
	}
	
	public long getTotalRAM() {
		return this.totalRAM;
	}
	
	public void setUsedRAM() {
		// get Runtime instance
		Runtime instance = Runtime.getRuntime();
		this.usedRAM = instance.totalMemory() - instance.freeMemory();
	}
	
	public long getUsedRAM() {
		return this.usedRAM;
	}
}
