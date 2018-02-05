const api = require('../getDataFromApi');

module.exports = [
  {
    method: 'GET',
    path: '/api1',
    handler: (request, response) => {
      const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
      const apiDataValue = (value) => {
        const rateList = [];
        const list = JSON.parse(value);
        // console.log(value);
        list.books.forEach((book) => {
          const addRating = (id, rating) => {
            const entry = {};
            entry.id = id;
            entry.rating = JSON.parse(rating).rating;
            rateList.push(entry);
          };
          api.getUrl2(book, addRating);
        });
        for (let i = 1; i <= rateList.length; i += 1) {
          list.books.i.rating = rateList.i.rating;
        }
        response(list);
      };
      api.getUrl1(url1, apiDataValue);
    },
  }];
