angular.module('gitRecommender')
    .service('Recommendations', Recommendations)

Recommendations.$inject = ['$q', 'GitHub'];

function Recommendations($q, GitHub) {
    var service = {
        get: getRecommendations
    };

    return service;

    //////////

    function getRecommendations() {
        getCurrentTabUrl().then(function(url) {
            console.log(url);
        });

        return GitHub.get();
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