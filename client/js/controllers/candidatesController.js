var module = angular.module('vote_app');

module.controller('CandidatesController', function($scope, $location, candidatesService, $mdDialog) {
	$scope.candidates  = [];

	candidatesService.getCandidates().then(function(candidates) {
		$scope.candidates = candidates;
	});

	$scope.showDetails = function(ev, index) {
		var currentCandidate = $scope.candidates[index];
		var confirm = $mdDialog.confirm()
			.clickOutsideToClose(true)
			.title('Detalii despre ' + currentCandidate.name)
			.textContent(currentCandidate.details.description)
			.targetEvent(ev)
			.ok('Vreau sa votez cu ' + currentCandidate.name + '!')
			.cancel('Inapoi (pare dala cu dosar...)');

		$mdDialog.show(confirm).then(function() {
				$scope.status = 'You decided to get rid of your debt.';
			}, 

			function() {
				//back to candidates list
			});
	};

	$scope.redirectTo = function(route) {
		$location.path('/' + route);
	}
});