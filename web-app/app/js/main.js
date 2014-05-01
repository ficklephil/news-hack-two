require.config(
    {
    // Configure library paths and assign an injection reference
	paths: {
		jquery: 'lib/jquery/jquery-1.9.1',
		angular: 'lib/angular/angular',
        angularroutes: 'lib/angular/angular-route.min',
        resource: 'lib/angular/angular-resource.min',
        uiutils:'lib/angular/ui-utils',
        appController: 'controller/app-controller',
        homeController: 'controller/home-controller',
        listController: 'controller/list-controller',
        storyController: 'controller/story-controller',
        appDirectives: 'directives/app-directives',
        constantSrv:'service/constant-srv',
        constructSrv:'service/construct-srv',
        domainSrv:'service/domain-srv',
        httpSrv:'service/http-srv',
        moment: 'lib/moment/moment.min'
	},

    // Configure root location
	baseUrl: '/app/js',

    // Dependency Shim - Required for non AMD files
	shim: {
		'angular' : {'exports' : 'angular'},
        'angularroutes' : {deps:['angular'],'exports' : 'angularroutes'},
        'resource' : {deps:['angular'], 'exports' : 'resource'},
        'uiutils' : {deps:['angular'], 'exports' : 'uiutils'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},

    // Load order
	priority: [
		"angular",
        "jquery"
	]
});

/**
 * Application bootstrapping
 * Because of RequireJS we need to bootstrap the app app manually.
 * At this point we can also initiate any dependencies.
 */
require( [
	'jquery',
	'angular',
	'app',
	'routes',
    'moment'
], function($, angular, app, routes, moment) {
	'use strict';
	$(document).ready(function () {
        // Grab html tag
		var $html = $('html');
        // Manually bootstrap Angular to DOM
		angular.bootstrap($html, [app['name']]);
		$html.addClass('ng-app'); // Do we need this?
        moment().format();

	});
});
