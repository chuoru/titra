
const Paho = require('paho-mqtt')

export function connect () {
  // Intialize new Paho client connection
  var host = 'test.mosquitto.org'
  var port = 1883
  var clientID = 'clientID-' + parseInt(Math.random() * 100)

  var client = new Paho.Client(host, Number(port), clientID)

  var connectOptions = {
    useSSL: true,
    timeout: 3,
    mqttVersion: 4,
    onSuccess: onConnect
  }

  client.connect(connectOptions);
  client.onConnectionLost = function (e) { console.log(e.errorMessage) };
}

function onConnect () {
    var interval = 100;
    setInterval(publish, interval);
}

function publish() {

}
