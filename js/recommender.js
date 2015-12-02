(function() {
    'use strict';

    angular
        .module('app')
        .factory('Recommendations', Recommendations);

    Recommendations.$inject = ['$q', '$rootScope', 'GitHub', 'Recommender'];

    function Recommendations($q, $rootScope, GitHub, Recommender) {
        var service = {
            get: getRecommendations
        };

        return service;

        //////////

        function getRecommendations() {
            return getCurrentTabUrl().then(function(url) {
                var gitUrl = GitHub.parseGitUrl(url);

                if (gitUrl.error) {
                    return $q.reject(gitUrl.error);
                }

                return GitHub.getContents(gitUrl.username, gitUrl.repository, gitUrl.path).then(function(contents) {
                    var files = getContentsNames(contents);

                    return Recommender.get(GitHub.getRepositoryUrl(url), files).then(function(files) {
                        return files.map(function(file) {
                            file.html_url = GitHub.getFileHtmlUrl(gitUrl, file);
                            return file;
                        });
                    });
                });
            });


            function getContentsNames(contents) {
                return contents.filter(function(data) {
                    return data.type === 'file';
                }).map(function(data) {
                    return data.path;
                });
            }
        }

        function getCurrentTabUrl() {
            var dfd = $q.defer();

            chrome.tabs.query({
                currentWindow: true,
                active: true
            }, function(tabs) {
                $rootScope.$apply(function() {
                    dfd.resolve(tabs[0].url);
                });
            });

            return dfd.promise;
        }
    }
})();