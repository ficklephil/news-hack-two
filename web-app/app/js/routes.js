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
        $routeProvider.when('/mews/story', {
            templateUrl: '/app/partials/story.html',
            controller: 'StoryCtrl'
        });
        $routeProvider.when('/mews/vote/:type', {
            templateUrl: '/app/partials/vote.html',
            controller: 'MoodVoteCtrl'
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