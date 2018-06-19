
<html lang="en" >
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.8/angular-material.min.css">
</head>
<body ng-app="UIChallenge" ng-controller="HelloWorldController">
	
	<md-content>
		<md-toolbar>
      		<div class="md-toolbar-tools">
      		
        			
        			<h2>
          			<span>First Angular App <span ng-bind="name"></span>!</span>
        			</h2>
        			<span flex></span>
      		</div>
    		</md-toolbar>
    		
    		<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
      		<md-toolbar class="md-theme-indigo">
        			<h1 class="md-toolbar-tools">Tasks</h1>
      		</md-toolbar>
      		<md-content layout-padding ng-controller="SideBarMenu">
        			<ul class="menu-toggle-list">
        				<li>
        					<menu-link>
        						<a class="md-button md-ink-ripple" ng-class="{'active' : isSelected()}">Hello World!</a>
        					</menu-link>
        				</li>
        				<li>
        					<menu-link>
        						<a class="md-button md-ink-ripple" ng-class="{'active' : isSelected()}">GET Task</a>
        					</menu-link>
        				</li>
        				<li>
        					<menu-link>
        						<a class="md-button md-ink-ripple" ng-class="{'active' : isSelected()}">POST Task</a>
        					</menu-link>
        				</li>
        				<li>
        					<menu-link>
        						<a class="md-button md-ink-ripple" ng-class="{'active' : isSelected()}">Material Task</a>
        					</menu-link>
        				</li>
        				<li>
        					<menu-link>
        						<a class="md-button md-ink-ripple" ng-class="{'active' : isSelected()}">Stats Task</a>
        					</menu-link>
        				</li>
        				
        			</ul>
      		</md-content>
    		</md-sidenav>
    		
    		<div flex layout="row">
    
        		<md-content flex id="content">
        			<form name="clientForm">
        				<div layout-gt-sm="row">
          				<md-input-container class="md-block" flex-gt-sm>
            					<label>First name</label>
            					<input ng-model="name">
          				</md-input-container>
        				</div>
        			</form>
        		</md-content>

    		</div>
	</md-content>

  
  <!-- Angular Material requires Angular.js Libraries -->
  <script src="js/libraries/angularjs/angular.min.js" ></script>
  <script src="js/libraries/angularjs/angular-animate.min.js"/> "></script>
  <script src="js/libraries/angularjs/angular-aria.min.js"></script>
  <script src="js/libraries/angularjs/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="js/libraries/angularjs/angular-material.min.js"></script>
  
  <!-- Your application bootstrap  -->
  <script type="text/javascript">    
    angular.module('UIChallenge', ['ngMaterial', 'ngMessages'])
    		.controller('HelloWorldController', function($scope){
    			$scope.firstname = "World";
    		})
    		.controller('SideBarMenu', function($scope){
    			$scope.isSelected = function(){
    				return false;
    			}
    		});
  </script>
  
</body>
</html>