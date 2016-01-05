'use strict';


/*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
 templateUrl: 'view1/view1.html',
 controller: 'View1Ctrl'
 });
 }])*/

app.controller('View1Ctrl', function ($scope, $routeParams, $rootScope, linkDataFactory) {
    var route = $routeParams.pageId;


    /* var viewFilter = function (viewParam) {
     var idx = $rootScope.viewFilterParam.indexOf(viewParam);
     if (viewParam == 'all') {
     $rootScope.viewFilterParam = [];

     } else {
     if (idx > -1) {
     $rootScope.viewFilterParam.splice(idx, 1);

     } else {
     $rootScope.viewFilterParam.push(viewParam);
     }
     }

     console.log('viewFilter ' + $rootScope.viewFilterParam.length )
     };*/

    if (route.indexOf('-') > -1) {

        if (route == 'inbox-important') {
            $scope.important = !$scope.important;
            $scope.all = false;
            //viewFilter('important');
        }
        else if (route == 'inbox-unread') {
            $scope.unread = !$scope.unread;
            $scope.all = false;
            // viewFilter('unread');
        }
        else if (route == 'inbox-trach') {
            $scope.trach = !$scope.trach;
            $scope.all = false;
            // viewFilter('trach');
        }
        else if (route == 'inbox-all') {
            console.log($routeParams.pageId + ' route == inbox-all');
            $scope.all = true;
            $scope.important = false;
            $scope.unread = false;
            $scope.trach = false;
            // viewFilter('all');

        }

    }

    linkDataFactory.currentPageId = linkDataFactory.getDirectieve($routeParams.pageId);
    if (!linkDataFactory.currentPageId) {
        linkDataFactory.currentPageId = 0;
    }
      console.log('view1 linkDataFactory.currentPageId ' + linkDataFactory.currentPageId);

    //console.log('View1Ctrl: ' + linkDataFactory.getDirectieve($routeParams.pageId))

})
;