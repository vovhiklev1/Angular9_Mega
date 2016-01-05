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
            templateUrl: 'view1/mainPage.html', //view1/mainPage.html
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
        }).when('/not_found', {
            templateUrl: 'view1/not_found.html'
        })
        .otherwise({redirectTo: '/not_found'});
}]);

/*app.provider({
    $exceptionHandler: function(){
        var handler = function(exception, cause) {
           // alert(exception);
            console.log('$exceptionHandler')
            //I need rootScope here
        };

        this.$get = function() {
            return handler;
        };
    }
});*/


app.run(function (inboxFactory, $rootScope) {
    $rootScope.viewFilterParam = [];

    inboxFactory.loadList('https://api.myjson.com/bins/53ild').then(function (response) {
        inboxFactory.responseDataS.set(response.data, 'mail'); // inboxFactory.responseDataS.set(response.data.list, 'mail');
       // console.log('run mail loaded');
        $rootScope.initNotify();
       // $rootScope.updateNavIcons();

    });
    inboxFactory.loadList('https://api.myjson.com/bins/39i1t').then(function (response) { //'./db/notify.json'
        inboxFactory.responseDataS.set(response.data, 'notify'); // inboxFactory.responseDataS.set(response.data.list, 'notify');
       // console.log('run notify loaded');
        $rootScope.initNotify();
    });
})