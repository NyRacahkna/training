	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/dashboard.html',
			})
			.when('/students', {
				templateUrl : 'pages/student.html',
            })
            .when('/teachers', {
				templateUrl : 'pages/teacher.html',
			})

		
	});
