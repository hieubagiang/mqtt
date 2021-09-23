const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const port = 81;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, () => {
  console.log("websocket server listening on port ", port);
});