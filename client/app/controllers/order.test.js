(function() {
    'use strict';

    describe('Order controller', function() {
      beforeEach(module('sky'));

      var $controller;

      beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
      }));

      var $cookies;
      function getController() {
          var customerService = {
              getLocation: function (customerid) {
                  return {
                      then: function (callback) {
                          callback({location: 'LONDON' });
                      }
                  };
              }
          };
          var catalogueService = {
              getCatalogue: function (location) {
                  return {
                      then: function (callback) {
                          callback([
                              {category:'category 1', product: 'product 1'},
                              {category:'category 1', product: 'product 2'},
                              {category:'category 2', product: 'product 3'}]);
                      }
                  };
              }
          };
          var orderService = {
              add: function (product) {
                  return;
              },
              remove: function (product) {
                  return;
              },
              getAll: function () {
                  return [];
              }
          };
          $cookies = {
              get: function (key) { return 'test'; }
          };
          return $controller('Order', { catalogueService: catalogueService, customerService: customerService,
              orderService: orderService, $cookies: $cookies });
      }

      describe('init method', function() {
        it('catalogue according to the location of the customer', function() {
          var controller = getController();
          controller.init();
          expect(controller.categories.length).toEqual(2);
          expect(controller.categories[0].products.length).toEqual(2);
          expect(controller.categories[1].products.length).toEqual(1);
        });
      });
    });

}());
