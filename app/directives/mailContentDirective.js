/**
 * @ngdoc directive
 * @name app:mailContentDirective
 *
 * @description
 *
 *
 * @restrict A
 * */


app.directive('mailContentDirective', function (urlRouteFactory, $compile) {


    return {
        scope: false,
        restrict: 'AE',
        controller: 'mailContentCtrl',
        link: function (scope, elem, attrs, ctrl, transclude) {
            elem.replaceWith($compile('<div class="d" ' + scope.temp + ' >template2</div>')(scope));
            console.log('mailContentDirective1 ' + scope.temp + ' hi ')
        }


    };
});
