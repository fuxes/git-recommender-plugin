angular.module('gitRecommender', [])
	.service('Recommendations', Recommendations)
	.controller('gitRecommenderCtrl', gitRecommenderCtrl);

gitRecommenderCtrl.$inject = ['$scope', 'Recommendations'];

function gitRecommenderCtrl($scope, Recommendations) {
	Recommendations.get().then(function(data) {
		$scope.recommendations = data;
	});
}

Recommendations.$inject = ['$q', 'Git'];

function Recommendations($q, Git) {
	var service = {
		get: getRecommendations
	};

	return service;

	//////////

	function getRecommendations() {
		getCurrentTabUrl().then(function(url) {
			console.log(url);
		});

		return Git.get();
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