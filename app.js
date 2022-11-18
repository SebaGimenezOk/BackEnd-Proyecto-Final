const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IoServer } = require('socket.io')
const indexRouter = require('./src/routes/index');
const errorHandler=require('./src/middlewares/errorHandler');
require('dotenv').config();

const app = express();

const http = new HttpServer(app);
const io = new IoServer(http);

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'));

app.use('/api', indexRouter);

app.get('/', (_req, res) => {
    res.sendFile('index', { root: __dirname });
})
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.info(`Server up and running on port ${PORT}`));

// io.on('connection', socket => {
//     console.log(socket);
//     console.log('nuevo cliente socket conectado')
// })

module.exports = http;