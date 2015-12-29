'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute'/*,
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
