var express = require('express');
var fs = require('fs');
var buffer = new Buffer(30);

buffer = fs.readFileSync(index.html)

var thetext = buffer.toString();

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(thetext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
