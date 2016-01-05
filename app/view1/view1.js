'use strict';


/*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
 templateUrl: 'view1/view1.html',
 controller: 'View1Ctrl'
 });
 }])*/

app.controller('View1Ctrl', function ($scope, $routeParams, linkDataFactory) {
    var route = $routeParams.pageId;
    if (route.indexOf('-') > -1) {

        if (route == 'inbox-important') {
            $scope.important = !$scope.important;
        }
        else if (route == 'inbox-unread') {
            $scope.unread = !$scope.unread;
        }
        else if (route == 'inbox-trach') {
            $scope.trach = !$scope.trach;

        }
        else if (route == 'inbox-all') {
            console.log($routeParams.pageId + ' route == inbox-all');
            $scope.important = false;
            $scope.unread = false;
            $scope.trach = false;
        }

    }

    linkDataFactory.currentPageId = linkDataFactory.getDirectieve($routeParams.pageId);
    console.log('view1 linkDataFactory.currentPageId ' + linkDataFactory.currentPageId);

    //console.log('View1Ctrl: ' + linkDataFactory.getDirectieve($routeParams.pageId))

})
;