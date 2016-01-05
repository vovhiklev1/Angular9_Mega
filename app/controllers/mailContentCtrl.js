/**
 * @ngdoc controller
 * @name app:mailContentCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('mailContentCtrl', function ($scope,filterFilter, $exceptionHandler, $http, $rootScope, $filter, $location, $routeParams, urlRouteFactory, linkDataFactory, inboxFactory) {
    $scope.mail = urlRouteFactory;
    $scope.currentPageId = linkDataFactory.currentPageId;
    $scope.temp = $scope.mail.mailContent[$scope.currentPageId].template;
    $scope.f = inboxFactory;

    //console.log('$exceptionHandler');
    //throw "Fatal error";
    $rootScope.updateNavIcons = function () {
        $scope.f = inboxFactory;
        var list2 = $scope.f.responseDataS.get('mail');
        //Count mails in icons of nav mail panel
        $scope.allNavIcon = list2.length;
        $scope.trachNavIcon = filterFilter(list2, {type: 'trach'}).length;
        $scope.flaggedNavIcon = filterFilter(list2, {type: 'flagged'}).length;
        $scope.unreadNavIcon = filterFilter(list2, {type: 'unread'}).length;
        $scope.importantNavIcon = filterFilter(list2, {important: true}).length;
    };

    $scope.f.loadList('https://api.myjson.com/bins/53ild').then(function (response) {
        $scope.f.responseDataS.set(response.data, 'mail'); //$scope.f.responseDataS.set(response.data.list, 'mail');
        $scope.updateView();
        console.log('loaded');
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
        var list = $scope.f.responseDataS.get('mail');
        var listFiltered = $scope.f.inboxFilterView(list, $scope.important, $scope.flag, $scope.spam, $scope.unread, $scope.trach, $scope.readed);

        if (listFiltered.length) {
            $scope.list = listFiltered.slice($scope.f.viewList()[0], $scope.f.viewList()[1])
        } else {
            var array = [];
            for (var key in listFiltered) {
                if (!listFiltered.hasOwnProperty(key)) {
                    continue;
                }
                array.push(listFiltered[key]);
            }
            var listFiltered = array;
            $scope.list = array.slice($scope.f.viewList()[0], $scope.f.viewList()[1]);
        }

        $rootScope.listFiltered = listFiltered;
        $scope.currentList = $scope.f.currentPageS.getCurrentPage() + ' - ' + $scope.f.getListsCount();
        $scope.countItems = listFiltered.length;
        $scope.checkedAll = false;

        $rootScope.updateNavIcons();
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
        //   console.log('toggle checkedItems ' + $scope.checkedItems.length)
    };

    $scope.toggleAll = function () {
        var tempList = $scope.list;

        if ($scope.checkedAll) {
            angular.forEach(tempList, function (val, i) {
                var itemIdx = $scope.checkedItems.indexOf(val);
                if (itemIdx == -1) {
                    $scope.checkedItems.push(val);
                }
                // console.log('  $scope.checkedItems.push(val); ' + $scope.checkedItems.length)
            })
        } else {
            angular.forEach(tempList, function (val, idx) {
                var itemIdx = $scope.checkedItems.indexOf(val);
                if (itemIdx > -1) {
                    $scope.checkedItems.splice(itemIdx, 1);
                }
            });

        }
        ;

    };

    $scope.getItem = function (item) {
        if ($scope.checkedItems.indexOf(item) > -1) {
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
                function (response) {
                    console.log("sendData failed  ");
                }
            );

        } else {
            console.log("$scope.removeItems err del " + $scope.checkedItems.length);
        }
        ;
    };
});
