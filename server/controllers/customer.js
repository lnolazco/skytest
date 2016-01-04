var customers = require('../model/model').Customers;

exports.getLocation = {
    handler: function(request, reply) {
        var location = '';

        var items = customers.filter(function (item) {
            return (item.customerid === request.params.customerid);
        });

        if (items.length > 0)
            location = items[0].location;

        reply({ location: location});
    }
};

exports.getAll = {
    handler: function(request, reply) {
        reply(customers);
    }
};
