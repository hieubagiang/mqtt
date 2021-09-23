const mqtt = require("mqtt");
const client = mqtt.connect('ws://mqtt-aedes.herokuapp.com:1883');
var topic = 'led'
var message = 'Hello World!'

client.on("connect", () => {
    console.log('connected');

    client.subscribe(topic, (err) => {
        var i=0;
        if (!err) {
            setInterval(()=>{
                client.publish(topic, message)
                console.log('Message sent!', message)
            }, 5000)
        }
    });
});
