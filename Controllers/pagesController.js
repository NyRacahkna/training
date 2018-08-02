	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
              
                controller  : 'mainController'
			})
			.when('/students', {
               
                controller  : 'studentController'
            })
            .when('/teachers', {
				templateUrl : 'pages/teacher.html',
			})

			scotchApp.controller('mainController', function($scope) {
                // create a message to display in our view
                $window.location.href = '/pages/dashboard.html';
            });
            scotchApp.controller('studentController', function($scope) {
                // create a message to display in our view
                $window.location.href = '/pages/student.html';
            });
        
	});
