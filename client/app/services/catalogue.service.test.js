(function() {
    'use strict';

    describe('catalogue service', function () {
      var catalogueService, httpBackend;

      beforeEach(module('sky'));

      beforeEach(inject(function ($httpBackend,_catalogueService_) {
        httpBackend = $httpBackend;
        catalogueService = _catalogueService_;
      }));

      it('should obtains catalogue products', function () {
        httpBackend
            .whenGET('/catalogue/LONDON').respond(
                [{"category":"Sport","product":"Chelsea TV","location":["LONDON"]},
                {"category":"Sport","product":"Arsernal TV","location":["LONDON"]},
                {"category":"Sky","product":"Sky news","location":["LONDON","LIVERPOOL"]},
                {"category":"Sky","product":"Sky sports news","location":["LONDON","LIVERPOOL"]}]
            );

        catalogueService.getCatalogue('LONDON').then(function(data) {
          expect(data.length).toEqual(4);
        });

        httpBackend.flush();
      });

    });


}());
