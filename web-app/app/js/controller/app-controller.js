define(['angular',
        'jquery'
    ],
    function(angular,
        $) {
        // Force strict coding
        'use strict';

        // Create out Angular Module
        return angular.module('myApp.controllers.appController', ['myApp.services'])

    /**
     * Root application controller
     * Manages Navigation and initiates root methods
     */
    .controller('AppCtrl',
        ['$scope',
        '$rootScope',
        '$location',
        '$route',
        'NavDomain',
        'StoryDomain',
        'MyService',
        function (
            $scope,
            $rootScope,
            $location,
            $route,
            NavDomain,
            StoryDomain,
            MyService)
        {
            /***********************************/
            // Application scope
            // i.e. Index.html scope level
            /***********************************/
            $scope.navDomain = NavDomain;
            $scope.user = "";

            // Scope vars
            // Scope properties
            if(StoryDomain.index == -1) NavDomain.navigate('/');

            /*** MAIN MENU ***/
            // Load Main Menu JSON
            NavDomain.pageId = typeof $location.path().split("/")[2] != "undefined" ? $location.path().split("/")[2] : "home";

            $scope.okClick = function() {
                MyService.send('/user/signup', 'POST', {login:$scope.user}).then(function() {
                    $rootScope.user = MyService.data();
                    console.log("$rootScope.user", $rootScope.user);
                    $scope.$broadcast("CLOSE_SPLASH_OK");
                })
            };
        }])
    });