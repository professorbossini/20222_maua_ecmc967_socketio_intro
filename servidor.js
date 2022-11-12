const http = require('http');
const socketio = require ('socket.io')

const server =  http.createServer((req, res) => res.end('Servidor HTTP OK'))

const io = socketio(server)

io.on('connection', (socket, req) => {
  socket.emit('ola_do_servidor', 'Você está conectado a um servidor Socket.IO!')  

  socket.on('mensagem_do_cliente', msg => console.log(msg))
})

server.listen(3000)