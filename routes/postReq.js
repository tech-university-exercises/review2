const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: (request, response) => {
      console.log(request);
      Models.users.create({
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
      }).then(() => {
        response({
          statusCode: 201,
          message: 'User created',
        });
      });
    },
  }];
