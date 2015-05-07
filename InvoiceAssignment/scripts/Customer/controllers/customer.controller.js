/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('Customer').controller('customerCntrl',['$scope','customerService',function($scope, nameService){
    $scope.addCust =function() {
        //var cust = $scope.selectedcust;
        $scope.custid = $scope.custlist.length+1;
        nameService.addCustomer({'custid':$scope.custid,'name':$scope.name,'address':$scope.address});
        $scope.name = '';
        $scope.address='';
        $scope.custid=0;
    };
    $scope.custlist=nameService.customers;
}]);

