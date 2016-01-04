(function() {
    'use strict';

    describe('order service', function () {
        var orderService;

        beforeEach(module('sky'));

        beforeEach(inject(function (_orderService_) {
            orderService = _orderService_;
        }));

        var product1 = {category:'category',product:'product 1'};
        var product2 = {category:'category',product:'product 2'};

        it('should add one product', function () {
            orderService.add(product1);
            expect(orderService.getAll().length).toEqual(1);
        });
        it('should get one product', function () {
            orderService.add(product1);
            orderService.add(product2);
            expect(orderService.getAll().length).toEqual(2);
        });
        it('should remove product added', function () {
            orderService.add(product1);
            orderService.remove(product1);
            expect(orderService.getAll().length).toEqual(0);
        });
        it('should clear list of products', function () {
            orderService.add(product1);
            orderService.add(product2);
            orderService.clear();
            expect(orderService.getAll().length).toEqual(0);
        });

    });

}());
