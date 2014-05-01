/**
 * @author Shane Seward
 *
 * Application controllers
 * Consolidate all individual Controller modules
 */
define(['angular',
    'jquery',
    'appController',
    'homeController',
    'listController'],
    function (angular,
              $,
              appController,
              homeController,
              listController)
    {
        // Force strict coding
        'use strict';

        return angular.module('myApp.controllers', ['myApp.controllers.appController',
                                                    'myApp.controllers.homeController',
                                                    'myApp.controllers.listController'])


    });