(function() {
    'use strict';

    describe('Checkout controller', function() {
      beforeEach(module('sky'));

      var $controller;

      beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
      }));

      function getController() {
          var $state = {
              go: function (view) {
                  return;
              }
          };
          var orderService = {
              getAll: function () {
                  return [{name: 'product 1'},{name: 'product 2'}];
              },
              clear: function () {
                  return [];
              }
          };
          return $controller('Checkout', { $state: $state, orderService: orderService });
      }

      describe('init method', function() {
        it('gets all products from the basket', function() {
          var controller = getController();
          controller.init();
          expect(controller.products.length).toEqual(2);
        });
      });
      describe('clean method', function () {
         it('cleans the basket and goes to the order view', function () {
             var controller = getController();
             controller.init();
             controller.clear();
             expect(controller.products.length).toEqual(0);
         });
      });
    });

}());
