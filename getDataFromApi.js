const http = require('https');

function getUrl(url, callback) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', callback);
    response.on('error', console.error);
  });
}

module.exports = getUrl;
