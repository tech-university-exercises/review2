const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request, response) => {
      Models.users.findAll().then((result) => {
        response({
          result: `${result}`,
          statusCode: 200,
        });
      });
    },
  }];
