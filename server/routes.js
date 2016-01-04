var Catalogue = require('./controllers/catalogue');
var Customer = require('./controllers/customer');
var Static = require('./static');
// API Server Endpoints
exports.endpoints = [
    { method: 'GET', path: '/', config: Static.home },
    { method: 'GET', path: '/{param*}', config: Static.get },
    { method: 'GET', path: '/customerlocation/{customerid}', config: Customer.getLocation},
    { method: 'GET', path: '/customers', config: Customer.getAll},
    { method: 'GET', path: '/catalogue/{location}', config: Catalogue.get}
];
