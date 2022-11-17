const express = require('express');
require('dotenv').config();


const logger = require('morgan');

const { Server: HttpServer } = require('http');
const { Server: IoServer } = require('socket.io')

const app = express();

const http = new HttpServer(app);

const io = new IoServer(http);

app.use(express.static('public'));

app.use(logger('dev'))

app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        environment: process.env.ENVIRONMENT || 'undefined',
        health: 'Up!'

    })
})

app.get('/', (_req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => console.info(`Server up and running on port ${PORT}`));

io.on('connection', socket => {
    console.log(socket);
    console.log('nuevo cliente socket conectado')
})