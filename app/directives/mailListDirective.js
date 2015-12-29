/**
 * @ngdoc directive
 * @name app:mailListDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('mailListDirective', function () {
        return {
            restrict: 'A',
            templateUrl: '../view1/mainFrame.html',
            link: function (scope, elem, attr) {
                console.log('mailListDirective')
            }
        };
    });
