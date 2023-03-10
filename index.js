
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('hello pm2');
}).listen(process.env.PORT || 9000, function () {
  console.log('App listening on port %d', server.address().port);
});
