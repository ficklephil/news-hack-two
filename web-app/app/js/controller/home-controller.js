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
                $scope.items = [];
                MyService.get('/app/data/user-mood.json').then(function() {
                    $scope.items = MyService.data();
                });

                $scope.enterIndex = function(index) {
                    var moodFilters = $scope.items[index]["mood-filter"];
                    MyService.send('/story/list', 'POST', moodFilters).then(function() {
                        StoryDomain.setStories(MyService.data());
                        console.log(MyService.data());
                        NavDomain.navigate('/mews/story');
                    })
                }
            }])
    });