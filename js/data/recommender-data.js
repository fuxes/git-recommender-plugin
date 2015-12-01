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

        function get(repository, files) {
            var data = {
                "repository": "https://github.com/fatiherikli/fil.git",
                "files": [
                    "master/examples/hello.py",
                    "gh-pages/index.html",
                    "master/images/logo.png",
                    "master/workers/opal.js"
                ]
            };

            return $http.post(baseurl, data).then(function(res) {
                console.log(res.data);
                return res.data;
            });
        }
    }
})();