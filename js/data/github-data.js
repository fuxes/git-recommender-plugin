(function() {
    'use strict';

    angular
        .module('app')
        .factory('GitHub', GitDataService);

    GitDataService.$inject = ['$http', '$q'];

    function GitDataService($http, $q) {
        var baseUrl = 'https://api.github.com',
            reposSuffix = '/repos/',
            contentsSuffix = '/contents/',
            service = {
                getContents: getContents,
                getRepositoryUrl: getRepositoryUrl,
                parseGitUrl: parseGitUrl
            };

        return service;

        //////////

        function getContents(username, repository, path) {
            var url = baseUrl + reposSuffix + username + '/' + repository + contentsSuffix + path;

            return $http.get(url).then(function(res) {
                return res.data;
            });
        }

        function getRepositoryUrl(url) {
            var gitUrl = parseGitUrl(url);

            return gitUrl.clone_url;
        }

        function parseGitUrl(url) {
            var anchor = document.createElement('a'),
                gitUrl,
                match,
                path,
                repository,
                username;

            if (!(/github.com/).test(url)) {
                return {
                    error: 'You are not in github!'
                }
            }

            anchor.href = url;
            path = trimSlash(anchor.pathname);
            match = path.match(/([^\/]+)\/([^\/]+)(?:\/(?:[^\/]+\/){2})?(.*)?/);

            gitUrl = {
                username: match[1] || '',
                repository: match[2] || '',
                path: match[3] || '',
                clone_url: 'https://github.com/' + match[1] + '/' + match[2] + '.git'
            };

            return gitUrl;
        }

        function trimSlash(path) {
            if (path.charAt(0) === '/') {
                path = path.slice(1);
            }
            return path;
        }
    }
})();