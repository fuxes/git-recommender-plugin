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
                getContents: getContents
            };

        return service;

        //////////

        function getContents(username, repository) {
            var url = baseUrl + reposSuffix + username + '/' + repository + contentsSuffix;

            return $http.get(url).then(function(res){
                return res.data;
            });
        }

        // var response = [{
        //         "name": ".gitignore",
        //         "path": ".gitignore",
        //         "sha": "8a348ad5126c954dfac38618d995d794e6aa130d",
        //         "size": 801,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/.gitignore?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/.gitignore",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/8a348ad5126c954dfac38618d995d794e6aa130d",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/.gitignore",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/.gitignore?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/8a348ad5126c954dfac38618d995d794e6aa130d",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/.gitignore"
        //         }
        //     }, {
        //         "name": ".travis.yml",
        //         "path": ".travis.yml",
        //         "sha": "3f0291d8097124b9fcd2ff8e82c77495e621a3a1",
        //         "size": 339,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/.travis.yml?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/.travis.yml",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/3f0291d8097124b9fcd2ff8e82c77495e621a3a1",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/.travis.yml",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/.travis.yml?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/3f0291d8097124b9fcd2ff8e82c77495e621a3a1",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/.travis.yml"
        //         }
        //     }, {
        //         "name": "README.md",
        //         "path": "README.md",
        //         "sha": "9fee96faaa9762ec60cdb63110212f3cda39e8bf",
        //         "size": 1858,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/README.md?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/README.md",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/9fee96faaa9762ec60cdb63110212f3cda39e8bf",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/README.md",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/README.md?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/9fee96faaa9762ec60cdb63110212f3cda39e8bf",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/README.md"
        //         }
        //     }, {
        //         "name": "assets",
        //         "path": "assets",
        //         "sha": "ade2d6f0a3380357011f96283c99a463b123989b",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/assets?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/assets",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/ade2d6f0a3380357011f96283c99a463b123989b",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/assets?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/ade2d6f0a3380357011f96283c99a463b123989b",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/assets"
        //         }
        //     }, {
        //         "name": "azure.err",
        //         "path": "azure.err",
        //         "sha": "4bce3f8db6734ec6d148bbbf0e75d67df474d4f4",
        //         "size": 1096,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/azure.err?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/azure.err",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/4bce3f8db6734ec6d148bbbf0e75d67df474d4f4",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/azure.err",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/azure.err?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/4bce3f8db6734ec6d148bbbf0e75d67df474d4f4",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/azure.err"
        //         }
        //     }, {
        //         "name": "cc-bmean",
        //         "path": "cc-bmean",
        //         "sha": "e6bea438780da1ec56d391013993016714be74fd",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/cc-bmean?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/cc-bmean",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/e6bea438780da1ec56d391013993016714be74fd",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/cc-bmean?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/e6bea438780da1ec56d391013993016714be74fd",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/cc-bmean"
        //         }
        //     }, {
        //         "name": "deploy.sh",
        //         "path": "deploy.sh",
        //         "sha": "4bc630de4abb84566bb8dc9240e249da81853fca",
        //         "size": 3464,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/deploy.sh?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/deploy.sh",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/4bc630de4abb84566bb8dc9240e249da81853fca",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/deploy.sh",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/deploy.sh?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/4bc630de4abb84566bb8dc9240e249da81853fca",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/deploy.sh"
        //         }
        //     }, {
        //         "name": "grunt-gulp",
        //         "path": "grunt-gulp",
        //         "sha": "9065f92861e529915049809da61320bc6f9b8a61",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/grunt-gulp?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/grunt-gulp",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/9065f92861e529915049809da61320bc6f9b8a61",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/grunt-gulp?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/9065f92861e529915049809da61320bc6f9b8a61",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/grunt-gulp"
        //         }
        //     }, {
        //         "name": "hottowel",
        //         "path": "hottowel",
        //         "sha": "24e6f82ccbbeb7f0885ac0722df1dad47c65f1ac",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/hottowel?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/hottowel",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/24e6f82ccbbeb7f0885ac0722df1dad47c65f1ac",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/hottowel?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/24e6f82ccbbeb7f0885ac0722df1dad47c65f1ac",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/hottowel"
        //         }
        //     }, {
        //         "name": "modular",
        //         "path": "modular",
        //         "sha": "07b83b41893eed3cc85527ab54123b6ea1f7757f",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/modular?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/modular",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/07b83b41893eed3cc85527ab54123b6ea1f7757f",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/modular?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/07b83b41893eed3cc85527ab54123b6ea1f7757f",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/modular"
        //         }
        //     }, {
        //         "name": "ng-1.3 playground",
        //         "path": "ng-1.3 playground",
        //         "sha": "a452fa2e85ab801ddd00e6b78a5ff04e04feb224",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/ng-1.3%20playground?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/ng-1.3%20playground",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/a452fa2e85ab801ddd00e6b78a5ff04e04feb224",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/ng-1.3%20playground?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/a452fa2e85ab801ddd00e6b78a5ff04e04feb224",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/ng-1.3%20playground"
        //         }
        //     }, {
        //         "name": "ng-jwt",
        //         "path": "ng-jwt",
        //         "sha": "8eed82d140e7e5041354fe7bd3f398ecb529e16c",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/ng-jwt?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/ng-jwt",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/8eed82d140e7e5041354fe7bd3f398ecb529e16c",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/ng-jwt?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/8eed82d140e7e5041354fe7bd3f398ecb529e16c",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/ng-jwt"
        //         }
        //     }, {
        //         "name": "quickstart",
        //         "path": "quickstart",
        //         "sha": "1b904a744f4dad7d8355bffc36e91e39aa367816",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/quickstart?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/quickstart",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/1b904a744f4dad7d8355bffc36e91e39aa367816",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/quickstart?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/1b904a744f4dad7d8355bffc36e91e39aa367816",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/quickstart"
        //         }
        //     }, {
        //         "name": "todo-zumo",
        //         "path": "todo-zumo",
        //         "sha": "26828fd70f32563385f096d142559cba29df635a",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/todo-zumo?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/todo-zumo",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/26828fd70f32563385f096d142559cba29df635a",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/todo-zumo?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/26828fd70f32563385f096d142559cba29df635a",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/todo-zumo"
        //         }
        //     }, {
        //         "name": "webstorm.md",
        //         "path": "webstorm.md",
        //         "sha": "0e25d2b5cf1fc06806ea891a67559e0bf064155a",
        //         "size": 9152,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/webstorm.md?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/blob/master/webstorm.md",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/0e25d2b5cf1fc06806ea891a67559e0bf064155a",
        //         "download_url": "https://raw.githubusercontent.com/johnpapa/ng-demos/master/webstorm.md",
        //         "type": "file",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/webstorm.md?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs/0e25d2b5cf1fc06806ea891a67559e0bf064155a",
        //             "html": "https://github.com/johnpapa/ng-demos/blob/master/webstorm.md"
        //         }
        //     }, {
        //         "name": "z-metadata",
        //         "path": "z-metadata",
        //         "sha": "7fcd975af5fac3d29f300d21b9de6dd0370811ef",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/z-metadata?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/z-metadata",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/7fcd975af5fac3d29f300d21b9de6dd0370811ef",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/z-metadata?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/7fcd975af5fac3d29f300d21b9de6dd0370811ef",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/z-metadata"
        //         }
        //     }, {
        //         "name": "zza-node-mongo",
        //         "path": "zza-node-mongo",
        //         "sha": "090d9203b0be4be1264745e196a12ccc2381db2a",
        //         "size": 0,
        //         "url": "https://api.github.com/repos/johnpapa/ng-demos/contents/zza-node-mongo?ref=master",
        //         "html_url": "https://github.com/johnpapa/ng-demos/tree/master/zza-node-mongo",
        //         "git_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/090d9203b0be4be1264745e196a12ccc2381db2a",
        //         "download_url": null,
        //         "type": "dir",
        //         "_links": {
        //             "self": "https://api.github.com/repos/johnpapa/ng-demos/contents/zza-node-mongo?ref=master",
        //             "git": "https://api.github.com/repos/johnpapa/ng-demos/git/trees/090d9203b0be4be1264745e196a12ccc2381db2a",
        //             "html": "https://github.com/johnpapa/ng-demos/tree/master/zza-node-mongo"
        //         }
        //     }];
    }
})();