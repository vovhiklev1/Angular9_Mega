'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute'/*,
     'ngMockE2E',
     'myApp.view1',
     'myApp.view2',
     'myApp.version'*/
]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view1/mainPage.html',
            controller: 'mainPageCtrl'
        }).when('/view1', {
            templateUrl: 'view1/view1.html'
            // controller: 'View1Ctrl'
        }).when('/view2', {
            templateUrl: 'view1/view2.html',
            controller: 'View2Ctrl'
        }).when('/view1/:pageId', {
            templateUrl: 'view1/mainPage.html',
            controller: 'View1Ctrl'
        }).otherwise({redirectTo: '/'});
}]);


app.run(function (inboxFactory) {
    inboxFactory.loadList('./db/Inbox.json').then(function (response) {
        inboxFactory.responseDataS.set(response.data.list, 'mail');
        console.log('run mail loaded');
    });
    inboxFactory.loadList('./db/notify.json').then(function (response) {
        inboxFactory.responseDataS.set(response.data.list, 'notify');
        console.log('run notify loaded');
    });
})