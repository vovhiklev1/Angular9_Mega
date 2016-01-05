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
        scope: false,
        restrict: 'AE',
        templateUrl: 'view1/mailInbox.html',
        controller: 'mailInboxCtrl',

        link: function (scope, elem, attr) {

        }

    };
});
