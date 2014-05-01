define(['angular',
    'jquery',
    'appController',
    'homeController',
    'listController',
    'storyController'],
    function (angular,
              $,
              appController,
              homeController,
              listController,
              storyController)
    {
        // Force strict coding
        'use strict';

        return angular.module('myApp.controllers', ['myApp.controllers.appController',
                                                    'myApp.controllers.homeController',
                                                    'myApp.controllers.listController',
                                                    'myApp.controllers.storyController'])


    });