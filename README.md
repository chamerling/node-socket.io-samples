# Socket IO Samples

A light collection of simple socket.io samples.

## Usage

```
  npm install
```

Launch the server on http://localhost:1337 :

```
  node server.js
```

Once launched, you can open your browser on http://localhost:1337

The socket.io-client module provides a way to use socket io on the client without the browser:

```
  node client.js
```

The client will connect to the socket server and receive data pushed by the server.

### Pushing data

There are several ways to push data to clients:

- STDIN of the terminal used to launch the server is pushed to the socket clients.
- Open your browser at http://localhost:1337/push
- To be continued...
