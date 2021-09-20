const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

server.listen(port, function () {
  console.log('server started and listening on port ', port)
  server.on('connection', function() { // When connected
    console.log('connection');
  })
  server.on('connect', function() { // When connected
    console.log('connect');
  })

})
