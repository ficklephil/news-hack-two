/**
 * @author Shane Seward
 *
 * Application services
 */
define(['angular','resource'], function (angular, resource) {
	'use strict';
	
	angular.module('myApp.services.domain', ['ngResource'])

    /********************************************************************/
    /* DOMAIN SERVICES - CROSS CONTROLLER/SCOPE MODELS
    /*
    /* Use domain models to pass data between controllers..
    /********************************************************************/

    /**
     * Navigation domain
     *
     */
    .factory('NavDomain', function($location)
    {

        /**** PUBLIC ***/
        var publicApi = {
            navigate: function(url) {
                $location.path(url);
            }
        };


        return publicApi;
    });

});