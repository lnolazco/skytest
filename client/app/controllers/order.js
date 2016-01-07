(function(module, undefined) {
    'use strict';

    module
        .controller('Order', Controller);

    Controller.$inject = ['catalogueService', 'customerService', 'orderService', '$cookies'];

/**
 * Order controller: it allows the customer to select the products and add them to the basket.
 * Once the customer finish the product selection, checkout option will be available.
 *
 * @param {catalogueService} to get the catalogue of products
 * @param {customerService} to get customer location
 * @param {orderService} to store customer's selection (basket)
 * @param {$cookies} to get customer id
 */
    function Controller(catalogueService, customerService, orderService, $cookies) {
        var vm = this;
        //variables
        vm.categories = [];
        vm.basket = orderService.getAll();
        //methods
        vm.init = init;
        vm.addProduct = addProduct;
        vm.removeProduct = removeProduct;

        /**
         * Init method. This method gets catalogue according to the location of the customer.
         * From that location calls catalogue service to gets the product asociated to that location.
         * The data obtained is group by category.
         */
        function init() {
            var customerid = $cookies.get('customerid');
            customerService.getLocation(customerid)
                .then(function (data) {
                    catalogueService.getCatalogue(data.location)
                        .then(function (data) {
                            var catalogue = data;

                            var keys = [];
                            catalogue.forEach(function (item) {
                                if (keys.indexOf(item.category) === -1){
                                    keys.push(item.category);
                                    vm.categories.push({name:item.category,products:[item]});
                                }
                                else{
                                    vm.categories[keys.indexOf(item.category)].products.push(item);
                                }
                            });

                        });
                });
        }
        /**
         * Add product to the basket
         *
         * @param {product}
         */
        function addProduct(product) {
            orderService.add(product);
        }
        /**
         * Remove product of the basket
         *
         * @param {product}
         */
        function removeProduct(product) {
            orderService.remove(product);
            product.checked = false;
        }
    }
}(angular.module('sky')));
