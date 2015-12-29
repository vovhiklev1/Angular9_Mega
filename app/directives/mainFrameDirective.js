/**
 * @ngdoc directive
 * @name app:mainFrameDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('mainFrameDirective', function () {
        return {
            restrict: 'A',
            templateUrl: 'view1/mainFrame.html',
            link: function (scope, elem, attr) {
                //console.log('mainFrameDirective')
            }
        };
    });
