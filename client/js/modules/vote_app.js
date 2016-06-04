var app = angular.module('vote_app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "../../templates/home.html",
			controller: 'HomeController'
		})
		.when('/candidates', {
			templateUrl: "../../templates/candidates-list.html",
			controller: 'CandidatesController'
		});

	
});