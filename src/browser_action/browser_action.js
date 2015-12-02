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
        $scope.loading = false;
        $scope.gotoNodeUrl = gotoNodeUrl;
        $scope.tree = {
            nodes: false,
            config: RecommendationsTree.getConfig()
        };

        activate();

        //////////

        function activate() {
            getRecomendationsTree();
        }

        function getRecomendationsTree() {
            $scope.loading = true;

            return RecommendationsTree.get().then(function(tree) {
                $scope.tree.nodes = tree;
                $scope.tree.config.version += 1;
                $scope.loading = false;
            }, function() {
                $scope.tree.nodes = [];
                $scope.loading = false;
            });
        }

        function gotoNodeUrl(evt, data) {
            var href = data.node.a_attr.href;

            chrome.extension.sendMessage({
                redirect: href
            });
        }
    }
})();