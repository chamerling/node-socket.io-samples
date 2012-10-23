// 
// Socket IO client, does nothing but disaply 'data' messages...
//

var io = require('socket.io-client');

var socket = io.connect('http://localhost:1978');
socket.on('connect', function () {
  console.log('Client socket is connected');
});

socket.on('disconnect', function () {
  console.log('Socket has been disconnected');
});

socket.on('data', function(data) {
  console.log('Got a message from the server : ' + data);
});

console.log('Waiting messages from the server...');