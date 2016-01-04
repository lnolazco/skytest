(function(module) {
    'use strict';

    module
        .factory('customerFactory', Factory);

    Factory.$inject = ['$resource', 'apiUrl'];

    /**
     * Customer factory to creates a resource object with the calls to customer apis.
     *
     * @param {$resource} allows to do the calls to the rest api
     * @param {apiUrl} constants that contains api url
     * @returns $resource object with the customer methods
     */
    function Factory($resource, apiUrl) {
        return $resource(apiUrl.customerlocation,{},{
            getLocation:{method:'GET',isArray:false,url:apiUrl.customerlocation},
            getAll: {method:'GET',isArray:true,url:apiUrl.customers}
        });
    }

    module
        .service('customerService', Service);

    Service.$inject = ['customerFactory'];

    /**
     * Service that contains customer information.
     *
     * @param {customerFactory} customer object with the catalogue api access
     * @returns service with the customer methods
     */
    function Service(customer) {
        this.getLocation = getLocation;
        this.getAll = getAll;

        /**
         * Gets location of the customer according to the id provided.
         *
         * @param {customerid} customer identification
         * @returns customer location
         */
        function getLocation(customerid) {
            return customer.getLocation({ customerid: customerid}).$promise;
        }
        /**
         * Gets all the customers.
         *
         * @returns list of customers
         */
        function getAll() {
            return customer.getAll().$promise;
        }
    }
}(angular.module('sky')));
