/**
 * @ngdoc controller
 * @name app:mailContentCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('mailContentCtrl', function ($scope, $http, $filter, $location, $routeParams, urlRouteFactory, linkDataFactory, inboxFactory) {
    $scope.mail = urlRouteFactory;
    $scope.currentPageId = linkDataFactory.currentPageId;
    $scope.temp = $scope.mail.mailContent[$scope.currentPageId].template;
    $scope.f = inboxFactory;


    $scope.f.loadList().then(function (response) {
        $scope.f.responseDataS.set(response.data.list);
        $scope.updateView();
        console.log('loaded');
        //  $scope.list = list.slice($scope.f.viewList()[0], $scope.f.viewList()[1] + 1);
        //  console.log(' success loadList1 ' + $scope.f.responseData.get()[0].name);

    });

    $scope.setNextList = function () {
        $scope.f.nextList();
        $scope.updateView();
        console.log('setNextList ');
    };
    $scope.setPrevList = function () {
        $scope.f.prevList();
        $scope.updateView();
    }

    $scope.updateView = function () {
        var list = $scope.f.responseDataS.get();
        $scope.list = list.slice($scope.f.viewList()[0], $scope.f.viewList()[1]);
        $scope.currentList = $scope.f.currentPageS.getCurrentPage() + ' - ' + $scope.f.getListsCount();
        $scope.countItems = list.countItems;
        //console.log(' success loadList1 ' + list[0].name);
    };

    $scope.checkedItems = [];
    $scope.toggle = function (item, selected, idx) {
        var idx = $scope.checkedItems.indexOf(item);

        if (idx > -1) {
            $scope.checkedItems.splice(idx, 1)
        } else {
            $scope.checkedItems.push(item);
        }
        return false
        console.log('toggle checkedItems ' + $scope.checkedItems.length)
    };

    $scope.toggleAll = function () {
        var list = $scope.list;
        var tempList = list.slice($scope.f.viewList()[0], $scope.f.viewList()[1]);
        if ($scope.checkedAll) {
            angular.forEach(tempList, function (val, i) {
                $scope.checkedItems.push(val);

            });
        } else {
            $scope.checkedItems = [];
        } //console.log('checkedItems '+ checkedItems.length      )
        ;
        console.log('toggleAll checkedItems ' + $scope.checkedItems.length)
        /*angular.forEach(checkedItems,function(val,key){
         $scope.list[val].dd
         });*/
    };

    $scope.getItem = function (item) {
        if ($scope.checkedItems.indexOf(item) > -1) {
           // console.log('getItem checkedItems ' + $scope.checkedItems.length)
            return true
        } else {
            false
        }


    }

    $scope.removeItems = function () {
        var list = $scope.list;
        if ($scope.checkedItems) {
            angular.forEach($scope.checkedItems, function (val, kay) {
                var idx = list.indexOf(val);
                // console.log("idx  " + idx);
                if (idx > -1) {
                    list.splice(idx, 1);
                    // console.log("find ok  ");
                }
                ;
            });

            $scope.f.sendData().then(function (response) {
                    // success
                    //$scope.updateView();
                    console.log("sendData success  ");
                },
                function (response) { // optional
                    // failed
                    console.log("sendData failed  ");
                }
            );

        } else {
            console.log("$scope.removeItems err del " + $scope.checkedItems.length);
        }
        ;
    };
});
