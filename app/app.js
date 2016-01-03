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


app.run(function(inboxFactory){
    inboxFactory.loadList().then(function (response) {
        inboxFactory.responseDataS.set(response.data.list);
        //$scope.updateView();
        console.log('run loaded');
        //  $scope.list = list.slice($scope.f.viewList()[0], $scope.f.viewList()[1] + 1);
        //  console.log(' success loadList1 ' + $scope.f.responseData.get()[0].name);
    });
})