(function(module) {
    'use strict';

    module
        .controller('Customer', Controller);

    Controller.$inject = ['$state','customerService','$cookies'];

    /**
     * Allows choose the customer for the test. It stores customerid into the cache.
     *
     * @param {$state} to go to the order page
     * @param {customerService} list all the customers
     * @param {$cookies} to store the customerid
     */
    function Controller($state,customerService, $cookies) {
        var vm = this;
        //variables
        vm.customers = [];
        //methods
        vm.init = init;
        vm.select = select;

        /**
         * Init method. it gets and prints all customers.
         */
        function init() {
            customerService.getAll().then(function (data) {
                vm.customers = data;
            });
        }
        /**
         * It stores customer id in cookies.
         *
         * @param {customer} customer object that is obtained when the user select one of the list.
         * @returns resolve the function redirecting to the order view.
         */
        function select(customer) {
            $cookies.put('customerid', customer.customerid);
            $state.go('home.order');
        }
    }
}(angular.module('sky')));
