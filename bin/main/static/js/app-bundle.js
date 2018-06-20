// Creating a UIChallengeApp Module
var UIChallengeApp = angular.module('UIChallengeApp', ['ngMaterial']);

var helpers = {
	uri: "/api/",
	version: "v1",
	getApiURI: function(resource, query){
		// We could take this function a little further 
		// and build a query based off a dictionary object
		return this.uri + this.version + "/" + resource ;
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
			data: param,
		}).then(function(data){
			return data;
		}, function(error){
			console.log(error);
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
UIChallengeApp.controller('GetRequestTaskController',['$scope','httpService', '$mdToast', function($scope, httpService, $mdToast){
	// Demostrating the Java Spring RESTful api by requesting
	$scope.init = function(){
		$scope.getApplicationInfo();
	};
	// application name. We will display basic system info
	$scope.getApplicationInfo = function() {
		// Request the for the application name
		
		httpService.request("GET", 'application/info').then(function(response){
			$scope.applicationName = response.data.name;
			$scope.applicationDate = response.data.date;
			
			$scope.showSuccessToast();

			console.log("Performed a RESTful GET Request", response);
		});

	}
	
	var last = {
			bottom: false,
		    top: true,
		    left: false,
		    right: true
		  
	};
	
	$scope.toastPosition = angular.extend({},last);
	$scope.getToastPosition = function() {
	
		sanitizePosition();
		return Object.keys($scope.toastPosition)
			.filter(function(pos) { return $scope.toastPosition[pos]; })
		    .join(' ');
	};
	
	function sanitizePosition() {
		var current = $scope.toastPosition;
		if ( current.bottom && last.top ) current.top = false;
		if ( current.top && last.bottom ) current.bottom = false;
		if ( current.right && last.left ) current.left = false;
		if ( current.left && last.right ) current.right = false;
			last = angular.extend({},current);
		}
	
	$scope.showSuccessToast = function() {
	    $mdToast.show(
	      $mdToast.simple()
	        .textContent('Check Console For GET Task!')
	        .position($scope.getToastPosition())
	        .hideDelay(3000)
	    );
	  };
	
	$scope.init();

	// Server Route - GET - /api/v1/application/info
}]);

UIChallengeApp.controller('PostRequestTaskController',['$scope', 'httpService', function($scope, httpService){
	//Demostrate the task of Creating a circumfrence from a user input radius 
	$scope.radius = null;
	$scope.circumference
	$scope.getCalculatedCircumference = function(value) {
		httpService.request("POST", 'math/circumference', {radius: $scope.radius}).then(function(response){
			$scope.circumference = response.data.circumference;
			console.log("Performed a RESTful POST Request", response);
		});
	}
	
	// Server Route - POST - /api/v1/shape/circle/circumference 
	// Attributes: Radius

}]);

UIChallengeApp.controller('MaterialTaskController',['$scope', function($scope){

	//Demostrate the material ui Toast, Cards, and the datepicker
	//The date picker will calculate your age. 
	$scope.birthDatePicker;
	$scope.age = null;
	$scope.calculateAgeFromDate = function() {
		var today = new Date();
	    var age = today.getFullYear() - $scope.birthDatePicker.getFullYear();
	    var m = today.getMonth() - $scope.birthDatePicker.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < $scope.birthDatePicker.value.getDate())) {
	        age--;
	    }
	    
	    $scope.age = age;
	}
	
	

}]);

UIChallengeApp.controller('StatsTaskController',['$scope', 'httpService', function($scope, httpService){
	//Demostrate the task of Creating a circumfrence from a user input radius 
	
	
	
	// Server Route - GET - /api/v1/shape/circle/circumference 
	// Attributes: Radius

}]);


//If we have time I will like to demostrate a Database Controller