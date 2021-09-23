const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');
var topic = 'led123';
var message = '';

client.on("connect", () => {
    console.log('connected');

    client.subscribe(topic);
});

client.on("message", (topic, message) => {
    // message is Buffer
    console.log('received: '+message.toString());
});