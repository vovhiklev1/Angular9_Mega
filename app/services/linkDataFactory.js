/**
 * @ngdoc service
 * @name app:linkDataFactory
 *
 * @description
 *
 *
 * */
angular.module('app')
    .factory('linkDataFactory', function (urlRouteFactory) {

        var Service = {
            currentPageId: 0,
            getDirectieve: function (name) {
                var res = undefined;
                urlRouteFactory.mailContent.forEach(function (item, i, mailContent) {
                    if (name == item.name) {
                        //console.log(item.name + ' [' + i);
                        res = i;
                    }
                })
                return res
            }
        };

        return Service;
    })
;
