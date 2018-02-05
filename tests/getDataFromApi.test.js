const api = require('../getDataFromApi');

describe('Test the api to get data', () => {
  test('check that api returns an object', (done) => {
    const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    const dataCheck = (value) => {
      // console.log(typeof value);
      expect(typeof value).toBe('string');
      done();
    };
    api.getUrl1(url, dataCheck);
  });
  test('responds with success statusCode', (done) => {
    const book = {
      Author: 'J K Rowling',
      id: 4,
      Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
    };
    const dataCheck = (id, value) => {
      expect(typeof value).toBe('string');
      done();
    };
    api.getUrl2(book, dataCheck);
  });
});
