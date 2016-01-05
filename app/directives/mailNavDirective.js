/**
 * @ngdoc directive
 * @name app:mailNavDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('mailNavDirective', function () {
        return {
            restrict: 'A',
            templateUrl:'view1/mailNav.html',
            controller:'mailNavCtrl',
            link: function (scope, elem, attr) {


              //  scope.$apply();
            }
        };
});
