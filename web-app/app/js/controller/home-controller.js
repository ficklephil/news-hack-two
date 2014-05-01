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
                $rootScope.user = {};
                $rootScope.context = '';

                $scope.enterIndex = function(context) {
                    $rootScope.context = context;
                    MyService.send('/story/list', 'POST', {user:$scope.user.id, context: $scope.context}).then(function() {
                        StoryDomain.setStories(MyService.data());
                        NavDomain.navigate('/story');
                    })
                }

                $scope.signup = function() {
                    console.log("Siging up!")
                    MyService.send('/user/signup', 'POST', {login:"marcos.carceles@gmail.com"}).then(function() {
                        $rootScope.user = MyService.data();
                    })
                }
            }])
    });