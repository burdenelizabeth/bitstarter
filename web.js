var express = require('express');
var fs = require('fs');
var app = express();

var buffer = new Buffer(40);

app.use(express.logger());

buffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
