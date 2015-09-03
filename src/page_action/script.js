angular.module('gitRecommender', [])
	.service('Recommendations', Recommendations)
	.controller('gitRecommenderCtrl', gitRecommenderCtrl);

gitRecommenderCtrl.$inject = ['$scope', 'Recommendations'];

function gitRecommenderCtrl($scope, Recommendations) {
	$scope.recommendations = Recommendations.get();
}

Recommendations.$inject = ['$q'];

function Recommendations($q) {
	var service = {
		get: getRecommendations
	};

	return service;

	//////////

	function getRecommendations() {
		// hit api
		getCurrentTabUrl().then(function(url) {
			console.log(url);
		});

		return [];
	}

	function getCurrentTabUrl() {
		var dfd = $q.defer();
		var opts = {
			currentWindow: true,
			active: true
		};

		chrome.tabs.query(opts, function(tabs) {
			dfd.resolve(tabs[0].url);
		});

		return dfd.promise;
	}
}