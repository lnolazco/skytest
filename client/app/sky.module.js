(function(angular) {
    'use strict';

    /**
     * Sky module definition.
     *
     * @param {[dependencies]} array with all the dependencies
     * @param {ngMaterial} angular material design
     * @param {ui.router} angular routing module
     * @param {ngResource} angular resource module
     * @param {ngCookies} angular cookies module
     */
    angular
        .module('sky', [
            'ngMaterial',
            'ui.router',
            'ngResource',
            'ngCookies']);
}(angular));
