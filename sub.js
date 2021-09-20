const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://mqtt-aedes.herokuapp.com:1883');
var topic = 'led';
var message = '';

client.on("connect", () => {
    console.log('connected');

    client.subscribe(topic);
});

client.on("message", (topic, message) => {
    // message is Buffer
    console.log('received: '+message.toString());
});