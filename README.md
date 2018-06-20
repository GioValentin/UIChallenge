# UIChallenge

To run on Port 80 on a Mac Compute you would need to run this command in the project
  -sudo java -jar build/libs/UIChallenge-0.0.1-SNAPSHOT.jar --server.port=80
  
  Overview The objective of this excercise is to prove an ability to learn, adapt, and implement based on the latest industry standard  techniques. A total of six challenges must be completed. There are three required challenges and another six optional challenges to choose from. Any combination of the optional challenges may be selected. However, <b>at least</b> three must be chosen, along with the three required to total the minimum six challenges. Please indicate which of the optional challenges have been selected so that they may be evaluated appropriatly. 
  
  Evaluation will be basd on clea, readable, coherent code, as well as successful completion of the challegnes. Fee; free to use any IDE. However, it i worth noting that most LiDP developers use Eclipse as their IDE. 
  
  You'll be given three days to complete this project.
  
  Required Tasks
  
    - Create a new Gradle project 
      - https://gradle.org
    - Implement Spring Boot into this project 
      - https:/projects.spring.io/spring-boot
      - Run the spring Boot server on port 80
    - Create a landing page for the server using AngularJS 1.6.x and Angular Material 1. This page will serve as the home for all optional       challenges. 
  
  *** Note: Do not use any of the version of AngularJs2 or later.
  
  Optional Tasks
  
  Hello World
    
    - Create an input that prompts the user to enter their name on the page. Using AngularJs display "Hello, {NAME}" where {NAME} is the    input given by the user. Make sure that {NAME} changes dynamically witht he what the user types.
  
  GET
    
    - Create a RESTful web service with the Spring enviroment. This service will GET the name of the application and the current date. The UI will call the service and display the information at the top of the page. 
    
 POST
  
    - Create a numeric only input with a tag name "Radius" and a button on the page. When you press the button it will take the input and send it to a RESTful web service within the Spring enviroment. This service will calculate the circumference of a circle based on the supplied radius, return, and display it tothe user. Note, that this can be accomplished without a web service but use the webservice. 
    
Material 

  - Implement the following using Angular Material
    - A button that pops up a <b>toastsd</b>
    - A grid of three or more <b>cards</b> that display any type of content
    - A datepicker that allows the user to select their date of birth and tells them their age.
  
System Stats  
  
  - Create a RESTful web service within the Spring enviroment. This service will GET basic system stats that inlcude CPU usuage, used and total RAM, used and total HDD space. This information will be returned and displayed to the user.
     
      
