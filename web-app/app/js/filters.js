define(['angular', 'services'], function (angular, services) {

    // Force strict coding
    'use strict';

    // Create filter module
	angular.module('myApp.filters', ['myApp.services'])

    //moment().format("MMM Do YY");
    /**
     * Format date to :  Jan 3rd 14
     */
    .filter('formatDate', function() {
        return function(input) {
            if(!input) return "";
            return moment(new Date(input*1000)).format("MMM Do YY, h:mm:ss a");
        };
    })
    /**
     * replace carriage returns for <br />
     */
    .filter('replaceNewLines', function($interpolate, $sce) {
        return function(input) {
            if(!input) return "";
            return $sce.trustAsHtml(input.replace(/\r\n|\r|\n/g, "<br />"));
        };
    })

});
