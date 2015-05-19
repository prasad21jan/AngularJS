/**
 * Created by prasadd on 4/20/2015.
 */
angular.module('common').directive('myList',function(){
    return {
        template: '<ol>\
                         <li ng-repeat="n in names" ng-bind="n"></li>\
                       </ol>'
    };
});
angular.module('common')
    .directive('myElement', function () {
        return {
            scope: {
                text: '@info'
            },
            template: '<span>Item - {{text}}</span>'
        }
    });