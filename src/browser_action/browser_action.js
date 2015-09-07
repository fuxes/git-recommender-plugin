(function() {
    angular.module('gitRecommender')
        .controller('gitRecommenderCtrl', gitRecommenderCtrl);

    gitRecommenderCtrl.$inject = ['$scope', 'Recommendations'];

    function gitRecommenderCtrl($scope, Recommendations) {

        $scope.gotoNodeUrl = function(evt, data) {
            var href = data.node.a_attr.href;
            chrome.extension.sendMessage({
                redirect: href
            });
        };

        $scope.treeConfig = {
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
            plugins: ['types', 'wholerow']
        };

        getTreeData().then(function(nodes) {
            $scope.treeData = nodes;
        });

        function parseGitFile(file) {
            var treeNode = {
                id: file.sha,
                text: file.name,
                type: file.type,
                parent: '#',
                a_attr: {
                    href: file.html_url,
                }
            };

            return treeNode;
        }

        function getTreeData() {
            return Recommendations.get().then(function(data) {
                var nodes = [];
                angular.forEach(data, function(item) {
                    nodes.push(parseGitFile(item));
                })
                return nodes;
            });
        }
    }
})();