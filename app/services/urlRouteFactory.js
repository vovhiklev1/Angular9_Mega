/**
 * @ngdoc service
 * @name app:urlRouteFactory
 *
 * @description
 *
 *
 * */
angular.module('app')
    .factory('urlRouteFactory', function () {

        var Service = {
            mailContent: [
                {
                    name: 'Inbox',
                    url: 'view1_/mailContent.html',
                    // template: '<div class="d" mail-inbox-directive="true" ng-transclude></div>'
                    template: 'mail-inbox-directive="true"'

                },
                {
                    name: 'Compose',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-compose-directive="true"' //'<div class="d" mail-compose-directive="true"></div>'
                },
                {

                    name: 'Dashboard 1',
                    url: 'view1/mailCompose.html',
                    template: 'mail-compose-directive="true"'
                },
                {
                    name: 'Dashboard 2',
                    url: 'view1/mailCompose.html',
                    template: 'mail-inbox-directive="true"'
                },
                {
                    name: 'Dashboard 3',
                    url: 'view1/mailCompose.html',
                    template: 'mail-inbox-directive="true"'
                },
                {
                    name: 'Trash',
                    url: 'view1/mailCompose.html',
                    template: 'mail-inbox-directive="true"'
                }
            ]
        };

        return Service;
    });
