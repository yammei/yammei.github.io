"use strict";
// declare var require: any;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redis = require('redis');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const serverPortNum = 4000;
const appPortNum = 4001;
const redisClient = redis.createClient();
const redisSubscriber = redis.createClient();
// Documentation here -> https://socket.io/docs/v4/handling-cors/
const httpServer = (0, http_1.createServer)();
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*"
    }
});
httpServer.listen(4000);
redisSubscriber.subscribe('chat');
redisSubscriber.on('message', (channel, message) => {
    io.emit('message', message);
});
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('message', (data) => {
        redisClient.publish('chat', data);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
    socket.on('request', (request) => {
        request.header('Access-Control-Allow-Origin', '*');
        request.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        request.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        request.send('Response data');
    });
});
// server.listen(serverPortNum, () => {
//   console.log(`Server @ Port ${serverPortNum}.`);
// });
// app.listen(appPortNum, () => {
//   console.log(`App @ Port ${appPortNum}.`);
// });
