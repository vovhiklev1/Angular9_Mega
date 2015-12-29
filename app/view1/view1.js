'use strict';


/*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
 templateUrl: 'view1/view1.html',
 controller: 'View1Ctrl'
 });
 }])*/

app.controller('View1Ctrl', function ($scope, $routeParams, linkDataFactory) {
    linkDataFactory.currentPageId = linkDataFactory.getDirectieve($routeParams.pageId);
    console.log('view1 linkDataFactory.currentPageId ' + linkDataFactory.currentPageId)
    //console.log('View1Ctrl: ' + linkDataFactory.getDirectieve($routeParams.pageId))
});