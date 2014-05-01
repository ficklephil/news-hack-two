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
    .directive('replaceCarriageReturns', function($compile)
    {
        return {
            restrict: 'A',
            link: function (scope, element)
            {
                var val = $compile($(element).text().replace(/\r\n|\n|\r/g, "<br />"));
                $(element).text(val);
            }
        };
    })

});

