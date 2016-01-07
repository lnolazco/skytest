(function(module) {
    'use strict';

    module
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * Configuration of the module. Here is defined the routing of the app and the views and controllers asociated.
     *
     * @param {$stateProvider}
     * @param {$urlRouterProvider}
     */
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '',
            templateUrl: 'app/views/main.html',
            abstract: true
          })
          .state('home.selectcustomer', {
            url: '/selectcustomer',
            templateUrl: 'app/views/selectcustomer.html',
            controller: 'Customer',
            controllerAs: 'vm'
          })
          .state('home.order', {
            url: '/order',
            templateUrl: 'app/views/order.html',
            controller: 'Order',
            controllerAs: 'vm'
          })
          .state('home.checkout', {
            url: '/checkout',
            templateUrl: 'app/views/checkout.html',
            controller: 'Checkout',
            controllerAs: 'vm',
            data: {
                title: 'Confirmation order',
                buttons: true
            }
          })
          .state('home.confirmed', {
            url: '/checkout',
            templateUrl: 'app/views/checkout.html',
            controller: 'Checkout',
            controllerAs: 'vm',
            data: {
                title: 'Thanks for your purchased',
                buttons: false
            }
          });

        $urlRouterProvider.otherwise('/selectcustomer');
    }
}(angular.module('sky')));
