/**
 * @author Shane Seward
 *
 * Application routes
 */
define(['angular', 'app'], function(angular, app)
{
    // Force strict coding
    'use strict';
    return app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider)
    {
        $routeProvider.when('/mews', {
            templateUrl: '/app/partials/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/mews/list', {
            templateUrl: '/app/partials/list.html',
            controller: 'ListCtrl'
        });

		$routeProvider.otherwise({
                redirectTo: function(routeParams, path, search) {
                    return '/mews';
                }
		});
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '!';
    }]);

});