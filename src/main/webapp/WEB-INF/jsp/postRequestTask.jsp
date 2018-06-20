<html lang="en" >
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.8/angular-material.min.css">
</head>
<body layout="column" ng-app="UIChallengeApp">
	
  <md-toolbar layout="row" ng-controller="GetRequestTaskController">
  	<h1>LiDP</h1>
  	<span flex></span>
  	
  	<span layout-align="right" layout="column">
  		<p layout-align="right" layout="row">
  			Application Name: {{applicationName}} <br/> 
  			Date: {{applicationDate}}
  		</p>
  	</span>
  	
  </md-toolbar>
	
  <div flex layout="row">
  	<!-- Sidebar -->
  	<md-sidenav md-is-locked-open="true" class="md-whiteframe-z2">
  		<md-list>

		<!-- List item #1 -->
		<md-list-item >
			<md-button>
			  Hello World
			</md-button>
		</md-list-item>

		<!-- List item #2 -->
		<md-list-item >
			<md-button>
			  Request Demo
			</md-button>
		</md-list-item>

	  </md-list>
  	</md-sidenav>
  	
  	<!-- Main Content -->
  	<md-content flex id="content" class="md-padding" layout="row" layout-wrap layout-align="center start">
  		<div flex="80" layout="column">
  	  		<md-card ng-controller="PostRequestTaskController">
        			<md-card-title>
          			<md-card-title-text>
            				<span class="md-headline">Hello World</span>
            				<span class="md-subhead">Hello, <span ng-bind="firstname"></span></span>
          			</md-card-title-text>
          			<md-card-content layout="column">
          				<md-input-container class="md-block" flex-gt-md>
            					<label>Enter Firstname</label>
            					<input ng-model="firstname">
          					</md-input-container>
          			</md-card-content>
        			</md-card-title>
      		</md-card>
      		
      		<!-- Post Request Test -->
      		<md-card ng-controller="PostRequestTaskController">
        			<md-card-title>
          			<md-card-title-text>
            				<span class="md-headline">Post Request Test</span>
            				<span class="md-subhead">This task will retrieve the circumference of a circle</span>
            				<span class="md-subhead">Calculated Circumference is <b><span ng-bind="circumference">{{circumference}}</span></b></span>
          			</md-card-title-text>
          			<md-card-content layout="column">
          				<md-input-container class="md-block" flex-gt-md>
            					<label>Enter Radius</label>
            					<input ng-model="radius"="radius">
          					</md-input-container>
          			</md-card-content>
        			</md-card-title>
        			<md-card-actions layout="row" layout-align="end center">
          			<md-button ng-click="getCalculatedCircumference()" ng-disabled="radius == null">Calculate</md-button>
        			</md-card-actions>
      		</md-card>
      		
  			<!-- Post Request Test -->
      		<md-card ng-controller="MaterialTaskController">
        			<md-card-title>
          			<md-card-title-text>
            				<span class="md-headline">Material Demo</span>
            				<span class="md-subhead">This task will calculate your age by utilizing javascript</span>
            				<span class="md-subhead">Calculated Age is <b><span ng-bind="age">{{age}}</span></b></span>
          			</md-card-title-text>
          			<md-card-content layout="column">
          				<md-input-container class="md-block" flex-gt-md>
            					<label>Enter Date of Birth</label>
            					<md-datepicker md-placeholder="00/00/0000" ng-model="birthDatePicker">
          					</md-datepicker>
          				</md-input-container>
          			</md-card-content>
        			</md-card-title>
        			<md-card-actions layout="row" layout-align="end center">
          			<md-button ng-click="calculateAgeFromDate()">Calculate Age</md-button>
        			</md-card-actions>
      		</md-card>
  		</div>
  	</md-content>
  </div>
	
  <!-- Angular Material requires Angular.js Libraries -->
  <script src="js/libraries/angularjs/angular.min.js" ></script>
  <script src="js/libraries/angularjs/angular-animate.min.js"/> "></script>
  <script src="js/libraries/angularjs/angular-aria.min.js"></script>
  <script src="js/libraries/angularjs/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="js/libraries/angularjs/angular-material.min.js"></script>
  
  <!-- Your application bootstrap  -->
  <script type="text/javascript" src="js/app-bundle.js"></script>
  
</body>
</html>