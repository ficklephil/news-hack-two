define(['angular',
    'jquery'
],
    function(angular,
             $) {
        // Force strict coding
        'use strict';

        // Create out Angular Module
        return angular.module('myApp.controllers.homeController', ['myApp.services'])

        /**
         *
         */
            .controller('HomeCtrl',['$scope','$rootScope', 'NavDomain', 'MyService', 'StoryDomain', function ($scope, $rootScope, NavDomain, MyService, StoryDomain)
            {
                $scope.navDomain = NavDomain;
                $rootScope.context = '';

                $scope.enterIndex = function(context) {
                    $rootScope.context = context;
                    console.log($rootScope.context, $rootScope.user);
                    MyService.send('/story/list', 'POST', {user:$rootScope.user.id, context: $rootScope.context}).then(function() {
                        StoryDomain.setStories(MyService.data());
                        NavDomain.navigate('/story');
                    })
                }
            }])
    });