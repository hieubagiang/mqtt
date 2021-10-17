const mqtt = require("mqtt");
const client = mqtt.connect('ws://127.0.0.1');
var topic = 'led123'
var message = 'Hello World!'

client.on("connect", () => {
    console.log('connected');

    client.subscribe(topic, (err) => {
        var i=0;
        if (!err) {
            setInterval(()=>{
                client.publish(topic, message)
                console.log('Message sent after 5sec!', message)
            }, 5000)
        }
    });
});
