var connections = 200;
const cp = require('child_process');
var net = require('net');

function getTimePrefix() {
    return (new Date()).toString() + ' ';
}

var onConnected = function(client, connection) {
    return function() {
        client.write(connection + ': Hello, server! Love, Client.');
    };
};

var onData = function(client, connection) {
    return function(data) {
        console.log(getTimePrefix() + 'Connection ' + connection + ' received: ' + data);
        client.destroy();
    };
}
    
var onClosed = function(connection) {
    return function() {
        console.log(getTimePrefix() + 'Connection ' + connection + ' closed');
    };
};

var onError = function(connection) {
    return function(err) {
        console.log(getTimePrefix() + 'Connection ' + connection + ' has error: ' + err);
    };
};

var startClient = function () {
    for (var i = 0; i < connections; ++i) {
        var client = new net.Socket();
        client.connect(1337, 'localhost', onConnected(client, i));
        client.on('data', onData(client, i));
        client.on('close', onClosed(i));
        client.on('error', onError(i));
    }
};

setInterval(startClient, 10000);
