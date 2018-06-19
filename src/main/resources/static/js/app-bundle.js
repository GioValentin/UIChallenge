
// Creating a UIChallengeApp Module
var UIChallengeApp = angular.module('UIChallengeApp', ['ngRoute']);

// Set routes
UIChallengeApp.config(function($routeProvider){
	$routeProvider


		// Route for Hello World Task
		.when('/', {
			templateUrl: 'js/views/tasks/HelloWorld.html',
			controller: 'HelloWorldTaskController'
		})

		// Route for Get Request Task
		.when('/demo-get-task', {
			templateUrl: 'js/views/tasks/GetRequestTask.html',
			controller: 'GetRequestTaskController'
		})

		// Route for POST Request Task
		.when('/demo-post-task', {
			templateUrl: 'js/views/tasks/PostRequestTask.html',
			controller: 'PostRequestTaskController'
		})

		//Route for Material Task
		.when('/demo-material-task', {
			templateUrl: 'js/views/tasks/MaterialTask.html',
			controller: 'MaterialTaskController'
		})

		//Route System Stats Task
		.when('/demo-system-stats-task', {
			templateUrl: 'js/views/tasks/SystemStatsTask.html',
			controller: 'SystemStatsTaskController'
		})

});

//Create controllers and inject Angular's Scope

//Creating HelloWorldTaskController
UIChallengeApp.controller('HelloWorldTaskController', function($scope){
	// Not much to do in this controller due to the view binds with the 
	// content allowing us to not have to write any code
	// we utilize ng-bind to do this.
});

//Create GetRequestTaskController
UIChallengeApp.controller('GetRequestTaskController', function($scope){
	// Demostrating the Java Spring RESTful api by requesting 
	// application name. We will display basic system info

	// Server Route - GET - /api/v1/application/info
});

UIChallengeApp.controller('PostRequestTaskController', function($scope){
	//Demostrate the task of Creating a circumfrence from a user input radius 

	// Server Route - POST - /api/v1/shape/circle/circumference 
	// Attributes: Radius

});

UIChallengeApp.controller('MaterialTaskController', function($scope){

	//Demostrate the material ui Toast, Cards, and the datepicker
	//The date picker will calculate your age. 

});


//If we have time I will like to demostrate a Database Controller
