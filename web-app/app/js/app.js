/**
 * @author Shane Seward
 *
 * Create Main application and
 * inject all application modules
 */
define([
	'angular',
	'angularroutes',
	'filters',
	'services',
	'directives',
	'controllers'],
    function (angular,
              angularroutes,
                 controllers,
                 filters,
                 services,
                 directives)
{
        // Force strict coding
		'use strict';

        // Create our application
		return angular.module('myApp', ['ngRoute',
                                        'ngResource',
                                        'myApp.controllers',
                                        'myApp.services',
                                        'myApp.filters',
                                        'myApp.directives']);
});
