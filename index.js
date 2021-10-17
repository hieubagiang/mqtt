const aedes = require('aedes');
const port = 1883;
const server = require('net').createServer(aedes.handle)
server.listen(port, function() {
    console.log('Ades MQTT listening on port: ' + port)
})


