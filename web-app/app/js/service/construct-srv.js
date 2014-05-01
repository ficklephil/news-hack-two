/**
 * @author Shane Seward
 *
 * Application services
 */
define(['angular','resource'], function (angular, resource) {
	'use strict';
	
	angular.module('myApp.services.construct', ['ngResource'])

    /********************************************************************/
    /* INSTANTIABLE CONSTRUCTS
    /********************************************************************/

    // To define an instantiatable class / constructor, we can
    // use either the Factory() of the Value() method.
    // Factory allows injection into class e.g. version below
        // To use simply inject 'SampleClass' and then 'new SampleClass(...)'


    /*
    **
     */
    .factory('ProgramInfo', function(version) {
        var title;
        var description;

        function ProgramInfo(t, d)
        {
            title = t;
            description = d;
        }

        /************************************/
        // PUBLIC API
        /************************************/
        ProgramInfo.prototype = {
            getTitle: function() {
                return title;
            },
            getDescription: function() {
                return description;
            }
        };

        /************************************/
        // STATIC API
        /************************************/


        return( ProgramInfo );

    })



});