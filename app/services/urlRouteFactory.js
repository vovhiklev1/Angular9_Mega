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
                    name: 'not-found',
                    url: 'view1_/not_found_frame.html',
                    template: 'not-found-frame-directive="true"'  //'<div class="d" mail-compose-directive="true"></div>'
                },
                {
                    name: 'Inbox',
                    url: 'view1_/mailContent.html',
                    // template: '<div class="d" mail-inbox-directive="true" ng-transclude></div>'
                    template: 'mail-inbox-directive="true"'

                },
                {
                    name: 'inbox-unread',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-inbox-directive="true"'  //'<div class="d" mail-compose-directive="true"></div>'
                },
                {
                    name: 'inbox-important',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-inbox-directive="true"'  //'<div class="d" mail-compose-directive="true"></div>'
                },
                {
                    name: 'inbox-trach',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-inbox-directive="true"'  //'<div class="d" mail-compose-directive="true"></div>'
                },
                {
                    name: 'inbox-all',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-inbox-directive="true"'  //'<div class="d" mail-compose-directive="true"></div>'
                },



                {
                    name: 'Compose',
                    url: 'view1_/mailCompose.html',
                    template: 'mail-compose-directive="true"' //'<div class="d" mail-compose-directive="true"></div>'
                },
                {

                    name: 'Dashboard1',
                    url: 'view1/mailCompose.html',
                    template: 'mail-inbox-directive="true"'
                },
                {
                    name: 'Dashboard2',
                    url: 'view1/mailCompose.html',
                    template: 'mail-inbox-directive="true"'
                },
                {
                    name: 'Dashboard3',
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
