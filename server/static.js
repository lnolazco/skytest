var path = require('path');

exports.home = {
    handler: function (request, reply) {
        reply.file('./client/index.html');
    }
};

exports.get = {
    handler: {
        directory :{
            path : path.join(__dirname, '../client'),
            index: false
        }
    }
};
