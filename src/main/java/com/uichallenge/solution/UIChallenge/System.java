package com.uichallenge.solution.UIChallenge;

import java.io.File;
import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;

public class System {
	
	public System () {}
	
	public double getCPULoad() {
		OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(
                OperatingSystemMXBean.class);
		return osBean.getSystemLoadAverage();
	}
	
	// I am not sure if this is supported in Windows systems
	// But from my research it will run in Java 6+ 
	// Notify me if you experience any issues.
	public long getTotalHDD() {
		File file = new File("/");
		return file.getTotalSpace();
	}
	
	public long getUsedHDD() {
		File file = new File("/");
		return file.getTotalSpace() - file.getFreeSpace();
	}
	
	public long getTotalRAM() {
		Runtime instance = Runtime.getRuntime();
		return instance.totalMemory();
	}
	
	public long getUsedRAM() {
		Runtime instance = Runtime.getRuntime();
		return instance.totalMemory() - instance.freeMemory();
	}
}
