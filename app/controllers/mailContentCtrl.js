/**
 * @ngdoc controller
 * @name app:mailContentCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('mailContentCtrl', function ($scope, $http, $location, $routeParams, urlRouteFactory, linkDataFactory) {
    $scope.mail = urlRouteFactory;
    $scope.currentPageId = linkDataFactory.currentPageId;
    $scope.temp = $scope.mail.mailContent[$scope.currentPageId].template;

   // $scope.list = [];
    if ($routeParams.pageId) {
//'#/db/' + $routeParams.pageId + '.json'
        $http.get('./db/Inbox.json').success(function (data) {
            $scope.list = data.list;
            //console.log($scope.list)

            console.log('___OK mailContentCtrl ' + $location.path() + '  ' + $scope.list)
        }).error(function (result) {
            console.log('___ERROR mailContentCtrl ' + $location.path())
        });

        //console.log('______'+ $routeParams.pageId + ' ____ '+ $location.path())
    }


  //  console.log('mailContentCtrl $scope.template:' + $scope.temp + ' $scope.currentPageId:' + $scope.currentPageId);


});
