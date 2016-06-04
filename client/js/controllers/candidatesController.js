var module = angular.module('vote_app');

module.controller('CandidatesController', function($scope, $location, candidatesService, $mdDialog) {
	$scope.candidates  = [];
	$scope.votedCandidate = null;

	candidatesService.getCandidates().then(function(candidates) {
		$scope.candidates = candidates;
	});

	$scope.isVoted = function(index) {
		return index === $scope.votedCandidate;
	};

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
				candidatesService.vote(currentCandidate.id);
				$scope.votedCandidate = index;
			}, 

			function() {
				//back to candidates list
			});
	};

	$scope.redirectTo = function(route) {
		$location.path('/' + route);
	}
});