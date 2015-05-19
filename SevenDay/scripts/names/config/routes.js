/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('names')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1/list"); // By default route to state1

        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "scripts/names/view/state1.html"
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "scripts/names/view/state1.list.html",
                controller: function ($scope) {
                    $scope.items = ["item 1", "item 2", "item 3"]
                }
            })
            .state('state1.table', {
                url: "/table",
                templateUrl: "scripts/names/view/state1.table.html",
                controller: function ($scope) {
                    $scope.items = ["item 1", "item 2", "item 3"]
                }
            })
            .state('state1.dynamic', {
                url: "/dynamic/{id}",
                template: "<h1>This is dynamic {{text}}</h1>",
                controller: function ($scope, $stateParams) {
                    $scope.text = $stateParams.id;
                }
            })
            .state('state2', {
                url: "state2",
                templateUrl: "scripts/names/view/state2.html"
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "scripts/names/view/state2.list.html",
                controller: ['$scope', 'myService', function ($scope, myService) {
                    $scope.things = myService.items;
                }]
            })
            .state('state3', {
                url: "/state3",
                templateUrl: "scripts/names/view/state3.html",
                controller: 'myCtrl'
            })
    });
