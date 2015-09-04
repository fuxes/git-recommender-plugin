angular.module('gitRecommender', ['ngJsTree'])
	.service('Recommendations', Recommendations)
	.controller('gitRecommenderCtrl', gitRecommenderCtrl);

gitRecommenderCtrl.$inject = ['$scope', 'Recommendations'];

function gitRecommenderCtrl($scope, Recommendations) {

	$scope.treeConfig = {
		core: {
			multiple: false,
			animation: true,
			check_callback: true,
			worker: true
		},
		types: {
			default: {
				icon: 'octicon octicon-flame'
			},
			folder: {
				icon: 'octicon octicon-file-text'
			},
			file: {
				icon: 'octicon octicon-file-directory'
			}
		},
		plugins: ['types', 'wholerow']
	};

	$scope.treeData = [{
		id: 'ajson1',
		parent: '#',
		text: 'Simple root node',
		type: 'folder',
		state: {
			opened: true
		}
	}, {
		id: 'ajson2',
		parent: '#',
		type: 'file',
		text: 'Root node 2',
		state: {
			opened: true
		}
	}, {
		id: 'ajson3',
		type: 'default',
		parent: 'ajson2',
		text: 'Child 1',
		state: {
			opened: true
		}
	}, {
		id: 'ajson4',
		type: 'default',
		parent: 'ajson2',
		text: 'Child 2',
		state: {
			opened: true
		}
	}];

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