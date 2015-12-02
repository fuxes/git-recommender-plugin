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

		//////////

		function getTree() {
			return Recommendations.get().then(function(data) {
				return data.map(createNode);
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
				plugins: [
					'types',
					'wholerow'
				],
				version: 1
			};

			return config;
		}

		function createNode(file) {
			var node = {
				id: file.sha || Math.random() * 100000,
				text: file.name || file.file + '(' + file.score + ')' || '',
				type: file.type || 'file',
				parent: '#',
				a_attr: {
					href: file.html_url || file.file,
				}
			};

			return node;
		}
	}
})();