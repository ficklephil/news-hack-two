define(['angular',
        'services',
        'jquery',
        'appDirectives'],
        function(angular,
                 services,
                 $,
                 appDirectives)
    {

     // Force strict coding
    'use strict';

    angular.module('myApp.directives', ['myApp.services',
                                        'myApp.directives.appDirectives'])


});

