var module = angular.module('vote_app');

module.controller('HomeController', function($scope, $location) {
	$scope.redirectTo = function(route) {
		$location.path('/' + route);
	}
});