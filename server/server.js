'use strict';

var Hapi = require('hapi');
var routes = require('./routes');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('inert'), function(err){
    if (err) throw err;
    server.route(routes.endpoints);
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
