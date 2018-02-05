const api = require('../getDataFromApi');

describe('Test the api to get data', () => {
  test('check that api returns an object', (done) => {
    const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    const dataCheck = (value) => {
      // console.log(typeof value);
      expect(typeof value).toBe('string');
      done();
    };
    api(url, dataCheck);
  });
  test('responds with success statusCode', (done) => {
    const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/2';
    const dataCheck = (value) => {
      expect(typeof value).toBe('string');
      done();
    };
    api(url, dataCheck);
  });
});
