define(['angular', 'app'], function(angular, app)
{
    // Force strict coding
    'use strict';
    return app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider)
    {
        $routeProvider.when('/', {
            templateUrl: '/app/partials/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/story', {
            templateUrl: '/app/partials/story.html',
            controller: 'StoryCtrl'
        });
        $routeProvider.when('/vote/:type', {
            templateUrl: '/app/partials/vote.html',
            controller: 'MoodVoteCtrl'
        });

		$routeProvider.otherwise({
                redirectTo: function(routeParams, path, search) {
                    return '/';
                }
		});
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '!';
    }]);

});