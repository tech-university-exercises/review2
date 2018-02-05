const http = require('https');

function getUrl1(url, callback) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', callback);
    response.on('error', console.error);
  });
}

function getUrl2(book, callback) {
  const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`;
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      callback(book, chunk);
    });
    response.on('error', console.error);
  });
}


module.exports = { getUrl1, getUrl2 };
