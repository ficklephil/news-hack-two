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
            .controller('HomeCtrl',['$scope','$rootScope', 'NavDomain', function ($scope, $rootScope, NavDomain)
            {
                console.log("home controller");
                $scope.navDomain = NavDomain;
            }])
    });