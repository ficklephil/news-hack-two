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
        function (
            $scope,
            $rootScope,
            $location,
            $route)
        {
            /***********************************/
            // Application scope
            // i.e. Index.html scope level
            /***********************************/

            // Scope vars
            // Scope properties

            /*** MAIN MENU ***/
            // Load Main Menu JSON
        }])
    });