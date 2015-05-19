/**
 * Created by prasadd on 4/20/2015.
 */
angular.module('names').controller('myCtrl',['$scope','nameService',function($scope , myService){
    $scope.addName = function () {
        myService.addName($scope.name);
        $scope.name='';
    };
    $scope.names=myService.items;
}]);