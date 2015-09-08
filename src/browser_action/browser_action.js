(function() {
    'use strict';

    angular
        .module('app')
        .controller('browserActionCtrl', browserActionCtrl);

    browserActionCtrl.$inject = [
        '$scope',
        'RecommendationsTree'
    ];

    function browserActionCtrl($scope, RecommendationsTree) {
        $scope.redirectNodeUrl = redirectNodeUrl;
        $scope.tree = {
            nodes: [],
            config: RecommendationsTree.getConfig()
        };

        activate();

        //////////

        function activate() {
            getRecomendationsTree();
        }

        function getRecomendationsTree() {
            RecommendationsTree.get().then(function(tree) {
                $scope.tree.nodes = tree;
            });
        }

        function redirectNodeUrl(evt, data) {
            var href = data.node.a_attr.href;

            chrome.extension.sendMessage({
                redirect: href
            });
        }
    }
})();