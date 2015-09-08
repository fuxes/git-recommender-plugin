(function() {
	'use strict';

	angular
		.module('app')
		.factory('RecommendationsTree', RecommendationsTree);

	RecommendationsTree.$inject = ['Recommendations'];

	function RecommendationsTree(Recommendations) {
		return {
			get: getTree,
			getConfig: jstreeConfig
		};
	}

	//////////

	function getTree() {
		return Recommendations.get().then(function(data) {
			var len = data.length,
				nodes = [];

			for (var i = 0; i < len; i++) {
				nodes.push(createNode(data[i]));
			}

			return nodes;
		});
	}

	function jstreeConfig() {
		var config = {
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
				file: {
					icon: 'octicon octicon-file-text'
				},
				dir: {
					icon: 'octicon octicon-file-directory'
				}
			},
			// sort:
			plugins: [
				'sort',
				'types',
				'wholerow'
			]
		};

		return config;
	}

	function createNode(file) {
		var node = {
			id: file.sha,
			text: file.name,
			type: file.type,
			parent: '#',
			a_attr: {
				href: file.html_url,
			}
		};

		return node;
	}
})();