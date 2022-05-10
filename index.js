const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const SocketServices = require('./src/services/chat.service')

// can chu y toi khai niem global duoc gioi thieu trong video 
global.__basedir = __dirname;
global._io = io; // cach 2

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg);
//   });
// });

// cach 1: use middleware express 

// app.use( (req, res, next) => {
//   res.io = io;
//   next()
// })

app.use(require('./src/routes/chat.route'))

global._io.on('connection', SocketServices.connection)

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
