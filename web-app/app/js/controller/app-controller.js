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
        function (
            $scope,
            $rootScope,
            $location,
            $route,
            NavDomain)
        {
            /***********************************/
            // Application scope
            // i.e. Index.html scope level
            /***********************************/

            // Scope vars
            // Scope properties

            /*** MAIN MENU ***/
            // Load Main Menu JSON
            NavDomain.pageId = typeof $location.path().split("/")[2] != "undefined" ? $location.path().split("/")[2] : "home";
            $scope.navDomain = NavDomain;
        }])
    });