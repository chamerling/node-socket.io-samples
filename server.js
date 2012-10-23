var fs = require('fs'),
path = require('path'),
http = require('http'),
socketio = require('socket.io'),
sockets = [];

var index = fs.readFileSync(path.join(__dirname, 'index.html'));

var server = http.createServer(function(req, resp) {
  console.log('Got a request', req);
  
  if (req.url === '/') {
    resp.statusCode = 200;
    resp.setHeader('content-type', 'text-html')
    resp.end(index)
  } else if (req.url === '/push') {
    push('Got a request on ' + req.url);
    resp.statusCode = 200;
    resp.end();
  } else {
    resp.statusCode = 404;
    resp.end();
  }
});

var io = socketio.listen(server);
server.listen(1978);

io.sockets.on('connection', function(socket) {
  console.log('Got a new connection', socket);
  sockets.push(socket);
});

// get the stdin input and send it to clients
process.stdin.resume();
process.stdin.on('data', function(chunk) {
  push(chunk.toString());
});

// push data to the socket clients
function push(data) {
  sockets.forEach(function(socket)  {
    socket.emit('data', data);
  });  
}