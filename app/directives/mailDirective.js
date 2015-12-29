/**
 * @ngdoc directive
 * @name app:mailDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('mailDirective', function () {
        return {
            restrict: 'A',
            templateUrl: 'view1/mail.html',
            link: function (scope, elem, attr) {
               // console.log('mailDirective')
            }
        };
    });
