(function() {
    'use strict';

    describe('Customer controller', function() {
      beforeEach(module('sky'));

      var $controller;

      beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
      }));

      var $cookies;
      function getController() {
          var $state = {
              go: function (view) { return; }
          };
          var customerService = {
              getAll: function () {
                  return {
                      then: function (callback) {
                          callback([{customerid:1, name: 'customer 1'},{customerid:2, name: 'customer 2'}]);
                      }
                  }
              }
          };
          $cookies = {
              id: '',
              put: function (key,value) { this.id = value; }
          }
          return $controller('Customer', { $state: $state, customerService: customerService, $cookies: $cookies });
      }

      describe('init method', function() {
        it('gets all customers', function() {
          var controller = getController();
          controller.init();
          expect(controller.customers.length).toEqual(2);
        });
      });
      describe('select method', function () {
         it('stores customer id in cookies', function () {
             var controller = getController();
             controller.init();
             var customer = {
                 customerid: 'test'
             };
             controller.select(customer);
             expect($cookies.id).toEqual('test');
         });
      });
    });

}());
