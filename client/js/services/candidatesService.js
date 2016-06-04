var candidatesService = function($http) {

	var baseURL = "http://localhost:3000";

	var getCandidates = function() {
		return $http.get(baseURL + '/getCandidates').then(function(response) {
			return response.data;
		});
	};

	return {
		getCandidates: getCandidates
	};

};

var module = angular.module('vote_app');
module.factory('candidatesService', candidatesService);