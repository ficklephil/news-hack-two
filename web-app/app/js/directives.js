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

