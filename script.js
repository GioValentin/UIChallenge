// Creating a UIChallengeApp Module
var UIChallengeApp = angular.module('UIChallengeApp', ['ngMaterial', 'ngMessages','ngModel']);

var helpers = {
	uri: "/api/",
	version: "v1",
	getApiURI: function(resource, query){
		// We could take this function a little further 
		// and build a query based off a dictionary object
		return this.uri + this.version + "/" + resource + "/" + query;
	}
};

UIChallengeApp.service('httpService', function($http){

	var self = this;

	self.request = function(method, resource, param) {
		method = method || "GET";
		resource = resource || "application/info";
		param = param || {};

		return $http({
			method: method,
			url:helpers.getApiURI(resource, ""),
			body: JSON.stringify(param),
			headers: {"Content-Type": "application/json", 'request-'},
		}).then(function(data){
			return data;
		}, function(){
			return null;
		});
	} 

});

//Creating HelloWorldTaskController
UIChallengeApp.controller('HelloWorldTaskController',['$scope',function($scope){
	// Not much to do in this controller due to the view binds with the 
	// content allowing us to not have to write any code
	// we utilize ng-bind to do this.
}]);

//Create GetRequestTaskController
UIChallengeApp.controller('GetRequestTaskController',['$scope','httpService', function($scope, httpService){
	// Demostrating the Java Spring RESTful api by requesting

	$scope.init = function() {
		$scope.getApplicationInfo();
	}

	// application name. We will display basic system info
	$scope.getApplicationInfo = function() {
		// Request the for the application name

		httpService.request("GET", 'application/info').then(function(response){
			$scope.applicationName = response.data.name;
			$scope.applicationDate = response.data.date;

			console.log("Performed a RESTful GET Request", response);
		});

	}

	//$scope.init();

	// Server Route - GET - /api/v1/application/info
}]);

UIChallengeApp.controller('PostRequestTaskController',['$scope', function($scope){
	//Demostrate the task of Creating a circumfrence from a user input radius 

	// Server Route - POST - /api/v1/shape/circle/circumference 
	// Attributes: Radius

}]);

UIChallengeApp.controller('MaterialTaskController',['$scope', function($scope){

	//Demostrate the material ui Toast, Cards, and the datepicker
	//The date picker will calculate your age. 

}]);


//If we have time I will like to demostrate a Database Controller