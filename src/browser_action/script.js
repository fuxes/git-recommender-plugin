angular.module('gitRecommender', ['ngJsTree'])
    .controller('gitRecommenderCtrl', gitRecommenderCtrl);

gitRecommenderCtrl.$inject = ['$scope', 'Recommendations'];

function gitRecommenderCtrl($scope, Recommendations) {

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
            id: file.name,
            text: file.name,
            type: file.type,
            parent: '#',
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