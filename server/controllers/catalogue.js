var catalogue = require('../model/model').Catalogue;

exports.get = {
    handler: function(request, reply) {
        var items = catalogue.filter(function(item){
          return (item.location.indexOf(request.params.location)>-1);
        });
        reply(items);
    }
};
