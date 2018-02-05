const api = require('../getDataFromApi');
const http = require('https');
const rp = require('request-promise');

module.exports = [
  {
    method: 'GET',
    path: '/api1',
    handler: (request, response) => {
      const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
      const apiDataValue = (value) => {
        const waitToFetchData = Promise.resolve(JSON.parse(value));
        const rateList = [];
        waitToFetchData.then((list) => {
          list.books.forEach((book) => {
            const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`;
            return rp(url).then((data) => {
              const entry = book;
              entry.rating = JSON.parse(data).rating;
              rateList.push(entry);
            });
            // const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`;
            // http.get(url, (data) => {
            //   data.setEncoding('utf8');
            //   data.on('data', (chunk) => {
            //     const entry = book;
            //     entry.rating = JSON.parse(chunk).rating;
            //     rateList.push(entry);
            //   });
            // });
            // console.log('in list.books.array');
          });
        }).then(() => {
          console.log(rateList, 'result');
          response(rateList);
        });
      };
      api.getUrl1(url1, apiDataValue);
    },
  }];
