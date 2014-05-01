define(['angular',
    'jquery'
],
    function(angular,
             $) {
        // Force strict coding
        'use strict';

        // Create out Angular Module
        return angular.module('myApp.controllers.storyController', ['myApp.services'])

        /**
         *
         */
            .controller('StoryCtrl',['$scope','$rootScope', 'NavDomain', 'MyService', 'StoryDomain', function ($scope, $rootScope, NavDomain, MyService, StoryDomain)
            {
                $scope.navDomain = NavDomain;
                $scope.storyDomain = StoryDomain;
                $scope.story = StoryDomain.getStory(StoryDomain.index);

                $scope.nextStory = function() {
                    StoryDomain.nextStory();
                    $scope.story = StoryDomain.getStory(StoryDomain.index);
                };

                $scope.prevStory = function() {
                    StoryDomain.prevStory();
                    $scope.story = StoryDomain.getStory(StoryDomain.index);
                };

                $scope.vote = function(type) {
                    if(type != "up" && type != "down") return;

                    $rootScope.vote = type == "up" ? 1 : -1;

                    NavDomain.navigate("/vote/" + type);
                };

                $scope.isBadImage = function(url) {
                    return url.match(/.svg.png$/);
                }
            }])
    });