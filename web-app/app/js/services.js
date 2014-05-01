/**
 * @author Shane Seward
 *
 * Application Services
 * Consolidate all individual Service modules
 */

define(['angular',
        'resource',
        'httpSrv',
        'domainSrv',
        'constantSrv',
        'constructSrv'],
        function (angular,
                  resource,
                  httpSrv,
                  domainSrv,
                  constantSrv,
                  constructSrv) {
    'use strict';

    angular.module('myApp.services', ['ngResource',
                                        'myApp.services.http',
                                        'myApp.services.domain',
                                        'myApp.services.constant',
                                        'myApp.services.construct'])
});