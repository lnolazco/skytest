(function() {
    'use strict';

    describe('customer service', function () {
      var customerService, httpBackend;

      beforeEach(module('sky'));

      beforeEach(inject(function (_customerService_, $httpBackend) {
        customerService = _customerService_;
        httpBackend = $httpBackend;
      }));

      it("should get 3 customers", function () {
        httpBackend.whenGET('/customers').respond(
            [
                {"customerid":"skyldn","name":"Sky London","location":"LONDON"},
                {"customerid":"skyliv","name":"Sky Liverpool","location":"LIVERPOOL"},
                {"customerid":"skyoth","name":"Sky Other","location":"MANCHESTER"}
            ]);
        customerService.getAll().then(function(data) {
            expect(data.length).toEqual(3);
        });
        httpBackend.flush();
      });

      it("should get customer location", function () {
        httpBackend
            .whenGET('/customerlocation/skyldn').respond(
                {
                    location: 'LONDON'
                }
            );

        customerService.getLocation('skyldn').then(function(data) {
          expect(data.location).toEqual('LONDON');
        });

        httpBackend.flush();
      });

    });


}());
