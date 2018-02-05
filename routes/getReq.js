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
        waitToFetchData.then(list => list.books.forEach((book) => {
          console.log('promise1');
          // const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`;
          // return rp(url).then((data) => {
          //   const entry = book;
          //   entry.rating = JSON.parse(data).rating;
          //   rateList.push(entry);
          // });

          // console.log('data callback');
          // const entry = book;
          // entry.rating = JSON.parse(chunk).rating;
          // return rateList.push(entry);

          const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`;
          const fetchRatingForeach = new Promise((resol) => {
            console.log('promise2');
            const httpPromise = new Promise(() => {
              http.get(url, (data) => {
                console.log('in http get');
                data.setEncoding('utf8');
                const prom = new Promise((resolve) => {
                  data.on('data', (chunk) => {
                    console.log('data callback');
                    const entry = book;
                    entry.rating = JSON.parse(chunk).rating;
                    rateList.push(entry);
                    resolve(chunk);
                  });
                });
                return prom;
              });
            });
            return httpPromise;
          });
          return fetchRatingForeach;
          // return fetchRatingForeach;
        })).then(() => {
          console.log(rateList);
          response(rateList);
        });
      };
      api.getUrl1(url1, apiDataValue);
    },
  }];
