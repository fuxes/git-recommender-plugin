(function() {
    'use strict';

    angular
        .module('app')
        .factory('Recommender', RecommenderDataService);

    RecommenderDataService.$inject = ['$http', '$q'];

    function RecommenderDataService($http, $q) {
        var baseurl = 'http://localhost:8088/recommend',
            service = {
                get: get
            };

        return service;

        //////////

        function get(repositoryUrl, files) {
            var data = {
                repository: repositoryUrl,
                files: files
            };

            return $http.post(baseurl, data).then(function(res) {
                return res.data.recommendation;
            });
        }
    }
})();