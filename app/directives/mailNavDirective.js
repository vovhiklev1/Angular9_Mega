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
            link: function (scope, elem, attr) {

            }
        };
});
