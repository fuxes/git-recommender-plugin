(function() {
    'use strict';

    angular
        .module('app')
        .factory('Recommendations', Recommendations);

    Recommendations.$inject = ['$q', 'GitHub', 'Recommender'];

    function Recommendations($q, GitHub, Recommender) {
        var service = {
            get: getRecommendations
        };

        return service;

        //////////

        function getRecommendations() {
            return getCurrentTabUrl()
                .then(function(url){
                    return parseGitUrl(url);
                })
                .then(function(gitUrl){
                    return GitHub.getContents(gitUrl.username, gitUrl.repository);
                });
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

        function parseGitUrl(url){
            var anchor = document.createElement('a'),
            gitUrl,
            match,
            path,
            repository,
            username;

            anchor.href = url;
            path = trimSlash(anchor.pathname);
            /* @TODO: Update regex for getting path
             * useful: http://stackoverflow.com/questions/16762847/
             * /([^\/]+)\/([^\/]+)\/(?:([^\/]+))?/
             */
            match = path.match(/([^\/]+)\/([^\/]+)/);

            gitUrl = {
                username: match[1] || '',
                repository: match[2] || ''
            };

            return gitUrl;
        }

        function trimSlash(path){
            if (path.charAt(0) === '/') {
                path = path.slice(1);
            }
            return path;
        }
    }
})();