const Server = require('../server');

// const output = require('./index.html');

describe('Server test', () => {
  const options = {
    method: 'GET',
    url: '/api1',
  };

  test('responds with success statusCode', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
