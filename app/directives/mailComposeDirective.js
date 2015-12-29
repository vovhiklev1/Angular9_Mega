/**
 * @ngdoc directive
 * @name app:mailComposeDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('mailComposeDirective', function () {
        return {
            restrict: 'AE',
            templateUrl:'view1/mailCompose.html',
            link: function (scope, elem, attr) {

            }
        };
});
