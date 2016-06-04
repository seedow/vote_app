var module = angular.module('vote_app');

module.controller('CandidatesController', function($scope, $location, candidatesService) {
	$scope.candidates  = [];

	candidatesService.getCandidates().then(function(candidates) {
		$scope.candidates = candidates;
	});



	$scope.redirectTo = function(route) {
		$location.path('/' + route);
	}
});