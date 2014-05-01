/**
 * @author Shane Seward
 *
 * Application services
 */
define(['angular','resource'], function (angular, resource) {
	'use strict';
	
	angular.module('myApp.services.constant', ['ngResource'])

    /********************************************************************/
    /* INJECTABLE CONSTANTS
    /********************************************************************/

    /**
     * Application version
     *
     * Values constructed in this way
     * act as injected properties to use across the application
     */
     .value('version', '1.0')
});