/**
 * @ngdoc controller
 * @name app:mailContentCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('mailContentCtrl', function ($scope, urlRouteFactory, linkDataFactory) {
    $scope.mail = urlRouteFactory;
    $scope.currentPageId = linkDataFactory.currentPageId;
    $scope.temp = $scope.mail.mailContent[$scope.currentPageId].template;

    console.log('mailContentCtrl $scope.template:'  +  $scope.temp + ' $scope.currentPageId:'+ $scope.currentPageId)

});
