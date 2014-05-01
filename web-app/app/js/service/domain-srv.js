define(['angular','resource'], function (angular, resource) {
	'use strict';
	
	angular.module('myApp.services.domain', ['ngResource'])

    /********************************************************************/
    /* DOMAIN SERVICES - CROSS CONTROLLER/SCOPE MODELS
    /*
    /* Use domain models to pass data between controllers..
    /********************************************************************/

    /**
     * Navigation domain
     *
     */
    .factory('NavDomain', function($location,$rootScope)
    {

        /**** PUBLIC ***/
        var publicApi = {
            pageId: "home",
            navigate: function(url) {
                this.pageId = updatePageId(url);
                $location.path(url);
            }
        };

        var updatePageId = function(url) {
            return typeof url.split("/")[2] != "undefined" ? url.split("/")[2] : "home";
        }


        return publicApi;
    })

    /**
     * Navigation domain
     *
     */
    .factory('StoryDomain', function()
    {
        var stories = {};
        /**** PUBLIC ***/
        var publicApi = {
            index: -1,
            getStories: function() {
                return stories;
            },
            setStories: function(s) {
                stories = s;
                this.index = 0;
            },
            getStory: function(index) {
                return this.getStories()[index];
            },
            nextStory: function() {
                this.index++;
            },
            prevStory: function() {
                this.index--;
            }
        };


        return publicApi;
    })
    /**
     * Navigation domain
     *
     */
    .factory('LoginDomain', function()
    {
        /**** PUBLIC ***/
        var publicApi = {
        };


        return publicApi;
    });

});