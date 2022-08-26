const { SerialPort } = require('serialport')
const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');;

    port.on('data', (data) => {
        socket.emit('data', data.toString());
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 115200,
})

port.on('open', () => {
    console.log('port open');
});

