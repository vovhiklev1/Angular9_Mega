/**
 * @ngdoc directive
 * @name app:mailInboxDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
app.directive('mailInboxDirective', function () {
        return {
            restrict: 'AE',
            templateUrl:'view1/mailInbox.html',
            controller: 'mailInboxCtrl',

            link: function (scope, elem, attr) {

                console.log('mailInboxDirective'  + scope.temp)
            }
        };
});
