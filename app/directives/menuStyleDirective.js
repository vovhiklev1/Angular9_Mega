/**
 * @ngdoc directive
 * @name app:menuStyleDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('app')
    .directive('menuStyleDirective1', function () {
        return {
            scope: false,
            restrict: 'CEA',
            controller: 'menuCtrl',
            link: function (scope, elem, attr) {
                var setActive = function (Mail) {
                    if (Mail) {
                        elem.css({
                            "color": "#ffffff",
                            "background": "#7664FF"
                        })
                    } else {
                        elem.css({
                            "color": "#8B91A0",
                            "background": "#13171E"
                        })
                    }
                }

                scope.$watch('Dashboard', function (Dashboard) {
                    setActive(Dashboard);
                });
                scope.$watch('Mail', function (Mail) {
                    setActive(Mail);
                });

                scope.$watch('Font', function (Dashboard) {
                    setActive(Dashboard);
                });

                scope.$watch('Pages', function (Dashboard) {
                    setActive(Dashboard);
                });


            }
        };
    });
