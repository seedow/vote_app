var candidatesService = function($http) {

	var baseURL = "http://localhost:3000";

	var getCandidates = function() {
		return $http.get(baseURL + '/getCandidates').then(function(response) {
			return response.data;
		});
	};

	var vote = function(candidateID) {
		return $http({
			method: 'GET',
			url: baseURL + '/vote',
			params: {
				username_id: 123456789,
				candidate_id: candidateID
			}
		}).then(function(response){
			console.log('sent the vote!!!');
		}, function(response){
			console.log('oh noes!!! no vote for u!')
		});
	};

	return {
		getCandidates: getCandidates,
		vote: vote
	};

};

var module = angular.module('vote_app');
module.factory('candidatesService', candidatesService);