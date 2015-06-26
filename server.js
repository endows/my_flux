var express = require('express'),
  cors = require('cors'),
  app = express();

app.use(cors());

var collections = {}

collections.tags = {
  '1':{name:'Python'},
  '2':{name:'Ruby'}
}

app.get('/:collection', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no' // disable nginx proxy buffering
  })
  res.write('\n')
  var send_data = JSON.stringify(collections[req.params.collection])
  res.write('data: ' + send_data + ' \n\n')
})

app.get('/:collection/:id', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no' // disable nginx proxy buffering
  })
  res.write('\n')
  var send_data = JSON.stringify(collections[req.params.collection][req.params.id])
  res.write('data: ' + send_data + ' \n\n')
})



var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
