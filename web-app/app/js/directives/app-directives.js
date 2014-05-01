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
    .directive('okCloseButton', function($compile)
    {
        return {
            restrict: 'A',
            link: function (scope, element)
            {
                scope.$on("CLOSE_SPLASH_OK", function() {
                    $(element).closest(".splash_container").hide();
                })
            }
        };
    })
    /**
     * Main Menu
     */
    .directive('storyImgError', function($compile)
    {
        return {
            restrict: 'A',
            link: function (scope, element)
            {
                element.bind('error', function() {
                    $(element).parent().hide();
                });
            }
        };
    })


});

