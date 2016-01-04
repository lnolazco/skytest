(function(module) {
    'use strict';

    module
        .service('orderService', Service);

    Service.$inject = [];

    /**
     * Order service stores customer product selection.
     *
     * @returns service object with methods to add/remove products of the basket.
     */
    function Service() {
        //variables
        var products = [];
        //methods
        this.add = add;
        this.remove = remove;
        this.clear = clear;
        this.getAll = getAll;

        /**
         * Adds a product to the order.
         *
         * @param {product}
         */
        function add(product) {
            var index = products.indexOf(product);
            if (index === -1)
                products.push(product);
            else
                products.splice(index, 1);
        }
        /**
         * Removes product of the order.
         *
         * @param {product}
         */
        function remove(product) {
            var index = products.indexOf(product);
            products.splice(index, 1);
        }
        /**
         * Clear the order.
         */
        function clear() {
            products = [];
        }
        /**
         * Gets all the products of the order.
         *
         * @returns order products.
         */
        function getAll() {
            return products;
        }
    }
}(angular.module('sky')));
