var net = require('net');

function getTimePrefix() {
    return (new Date()).toString() + ' ';
}

var server = net.createServer(function(socket) {
    socket.on('data', function(data){
        textChunk = data.toString('utf8');
        console.log(getTimePrefix() + textChunk);
        socket.write(textChunk);
    });
    
    socket.on('error', function(err) {
       console.log(getTimePrefix() + err)
    })
});

server.listen(1337, 'localhost');

