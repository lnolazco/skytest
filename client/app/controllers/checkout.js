(function(module) {
    'use strict';

    module
        .controller('Checkout', Controller);

    Controller.$inject = ['$state','orderService'];

    /**
     * Checkout controller: it present the basket to the client and proceed with the confirmation of the order.
     *
     * @param {state} to go back to the view order
     * @param {orderService} to get the basket
     */
    function Controller($state,orderService) {
        var vm = this;
        //variables
        vm.products = [];
        vm.title = $state.current.data.title;
        vm.showButtons = $state.current.data.buttons;

        //methods
        vm.init = init;
        vm.clear = clear;

        /**
         * Init method. It gets all the products from the basket.
         */
        function init() {
            vm.products = orderService.getAll();
        }
        /**
         * Cleans the basket and goes to the order view
         */
        function clear() {
            orderService.clear();
            vm.products = [];
            $state.go('home.order');
        }

    }
}(angular.module('sky')));
