define(['angular',
        'services',
        'jquery'],
        function(angular,
                 services,
                 $)
    {

     // Force strict coding
    'use strict';

    angular.module('myApp.directives.appDirectives', ['myApp.services'])

    /**
     * Main Menu
     */
    .directive('TestDirective', function()
    {
        return {
            restrict: 'A',
            link: function (scope, element)
            {
            }
        };
    })

});

