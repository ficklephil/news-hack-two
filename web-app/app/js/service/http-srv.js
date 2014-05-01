define(['angular','resource'], function (angular, resource) {
	'use strict';
	
	angular.module('myApp.services.http', ['ngResource'])

    /********************************************************************/
    /* CACHE
    /* Manage local cache
    /********************************************************************/

    .factory('MyCache', function ($cacheFactory) {
        return $cacheFactory('MyCache');
    })

    /********************************************************************/
    /* RESOURCE SERVICES
    /* USE ANGULARS $resource MODULE TO LOAD LOCAL DATA
    /********************************************************************/

    /**
     * Static service
     * Load the 'Navigation' JSON using the Angular resource plugin
     */
//    .service('MyResource', function($resource){
//
//        return function(id, isArray){
//            return $resource('/data/mainmenu.json', {}, {
//                query: {method:'GET', isArray:true}
//            });
//        }
//
//    })
       .factory('MainMenuResource', function($resource){
            return $resource('/static/v' + version + '/app/data/mainmenu.json', {}, {
                query: {method:'GET', isArray:true}
            });

        })


    /********************************************************************/
    /* HTTP SERVICES
    /********************************************************************/

    /**
     * General Asynchronous HTTP service
     *
     */
    .factory('MyService', function($http, $q, $log, MyCache) {

        var data = [];
        var service = {
            defferers: {}
        };

        service.cancelRequests = function(url) {
            var key = defferersKey(url);
            if(service.defferers[key] != undefined) service.defferers[key].resolve();
        };

        // General GET service.
        // Includes optional caching API
        service.get = function(url, useCache) {

            /**
             * THE CACHE MECHANISM HAS STOPPED WORKING
             * POSSIBLY DUE TO CHANGING API'S IN RECENT RELEASE
             *
             * DISABLED UNTIL DEBUGGED
             */

//            if(useCache === undefined)
//                useCache=true;
            useCache = false;

            data = [];
            var deffered = $q.defer();

            service.defferers[defferersKey(url)] = deffered;

            var cache = MyCache.get(url);
            if(!cache || !useCache)
            {
                $http({
                    url: url,
                    dataType: 'json',
                    method: 'GET',
                    data: '',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    timeout: deffered.promise

                }).success(function (d, status, headers, config) {

                    data = d;
                    // Store in cache
                    MyCache.put(url, data);
                    deffered.resolve();

                })
                .error(function(data, status, headers, config){
                    deffered.reject({data:data, status:status, message: url+" Fail"});
                })
            }else
            {
                data = cache;
                deffered.resolve();
            }

            return deffered.promise;
        };

        var defferersKey = function(url) {
            var splitUrl = url.split("/");
            var key = "/";

            for(var i = 1; i <= 3 && i < splitUrl.length; i++) {
                key += splitUrl[i] + "/";
            }
            return key;
        };

        // General 'send' service.
        // Use for POST, PUT, DELETE methods
        service.send = function(url, method, output) {
            var deffered = $q.defer();
            console.log('output', output);
            $http({
                url: url,
                method: method,
                data: output

            }).success(function (d, status, headers, config) {
                data = d;
                deffered.resolve();

            })
            .error(function(d, status, headers, config){

                deffered.reject({data:d, status:status, message: url+" Fail"});

            });
            return deffered.promise;
        };
        service.data = function() { return data; };

        return service;
    })



});