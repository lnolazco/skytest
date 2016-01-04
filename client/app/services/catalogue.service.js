(function(module) {
    'use strict';

    module
        .factory('catalogueFactory', Factory);

    Factory.$inject = ['$resource', 'apiUrl'];

    /**
     * Factory that creates a resource object that uses catalogue api
     *
     * @param {$resource} allows to do the calls to the rest api
     * @param {apiUrl} constants that contains api url
     * @returns $resource object with the catalogue methods
     */
    function Factory($resource,apiUrl) {
        return $resource(apiUrl.catalogue);
    }

    module
        .service('catalogueService', Service);

    Service.$inject = ['catalogueFactory'];

    /**
     * Service that obtains catalogue information
     *
     * @param {catalogueFactory} catalague object with the catalogue api access
     * @returns service with the catalogue methods
     */
    function Service(catalogue) {
        this.getCatalogue = getCatalogue;

        /**
         * This method returns catalogue according to the location provided.
         *
         * @param {location}
         * @returns catalogue with the list of products.
         */
        function getCatalogue(location) {
            return catalogue.query({ location: location }).$promise;
        }
    }
}(angular.module('sky')));
