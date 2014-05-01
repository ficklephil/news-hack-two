define(['angular',
    'jquery'
],
    function(angular,
             $) {
        // Force strict coding
        'use strict';

        // Create out Angular Module
        return angular.module('myApp.controllers.moodVoteController', ['myApp.services'])

        /**
         *
         */
            .controller('MoodVoteCtrl',['$scope','$rootScope', '$routeParams', 'NavDomain', 'MyService', 'StoryDomain', function ($scope, $rootScope, $routeParams, NavDomain, MyService, StoryDomain)
            {
                $scope.moods = [];
                MyService.get('/app/data/moods.json').then(function() {
                    $scope.moods = MyService.data();
                });

                $scope.vote = function(index) {
                    var mood = $scope.moods[index];
                    var story = StoryDomain.getStory(StoryDomain.index);
                    MyService.send('/story/update', "POST", {id: story.id, tag: mood.mood.toLowerCase()}).then(function() {
                        StoryDomain.nextStory();
                        NavDomain.navigate('/mews/story');
                    });
                };
            }])
    });