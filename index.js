const aedes = require('aedes');
const port = 1883
const server = require('net').createServer(aedes.handle);
server.listen(port, function() {
    console.log('Ades MQTT listening on port: ' + port)
})

const wsPort = 8883
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)
httpServer.listen(wsPort, function () {
    console.log('Aedes MQTT-WS listening on port: ' + wsPort)
});
