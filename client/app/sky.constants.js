(function(module) {
    'use strict';

    var apiUrl = {
        catalogue: '/catalogue/:location',
        customerlocation: '/customerlocation/:customerid',
        customers: '/customers'
    }
    /**
     * apiUrl constant that contains urls of the apis.
     */
    module.constant('apiUrl', apiUrl);
}(angular.module('sky')));
