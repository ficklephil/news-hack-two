define(['angular',
    'jquery'
],
    function(angular,
             $) {
        // Force strict coding
        'use strict';

        // Create out Angular Module
        return angular.module('myApp.controllers.listController', ['myApp.services'])

        /**
         *
         */
            .controller('ListCtrl',['$scope','$rootScope', 'NavDomain', 'MyService', 'StoryDomain', function ($scope, $rootScope, NavDomain, MyService, StoryDomain)
            {
                $scope.navDomain = NavDomain;
                $scope.storyDomain = StoryDomain;

                MyService.get('/story/list').then(function() {
                    StoryDomain.setStories(MyService.data());
                });

                $scope.enterStory = function(index) {
                    StoryDomain.index = index;
                    NavDomain.navigate('/story');
                }
            }])
    });