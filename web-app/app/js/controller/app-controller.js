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
            $scope.userError = "";

            // Scope vars
            // Scope properties
            if(StoryDomain.index == -1) NavDomain.navigate('/');

            /*** MAIN MENU ***/
            // Load Main Menu JSON
            NavDomain.pageId = typeof $location.path().split("/")[1] != "undefined" ? $location.path().split("/")[1] : "home";

            $scope.okClick = function() {
                if(!$scope.user.match(/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/)) {
                    $scope.userError = "Please enter a valid email";
                    return;
                }
                MyService.send('/user/signup', 'POST', {login:$scope.user}).then(function() {
                    $rootScope.user = MyService.data();
                    console.log("$rootScope.user", $rootScope.user);
                    $scope.$broadcast("CLOSE_SPLASH_OK");
                })
            };
        }])
    });