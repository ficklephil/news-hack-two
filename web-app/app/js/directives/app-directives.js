/**
 * @author Shane Seward
 *
 * Main application directives.
 * Re-usable components and DOM manipulation
 *
 * It is important to keep all DOM manipulation in Directives
 * and NOT in the Controllers.
 * The LINK method should be used for DOM manipulation - you are provided with
 * the taget element and a list of all attributes
 */
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

