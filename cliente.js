const prompts = require ('prompts')
const { io } = require ('socket.io-client')
//conexão com o servidor
const socket = io('http://localhost:3000')

socket.on ('connect', () => {
  console.log("Conectado ao servidor")
  socket.emit('mensagem_do_cliente', 'Olá, servidor')
})

const main = async () => {
  while (true){
    const resp = await prompts({
      type: 'text',
      name: 'mensagem',
      message: 'Digite uma mensagem para o servidor:'
    })
    socket.emit('mensagem_do_cliente', resp.mensagem)
  }
}

socket.on('ola_do_servidor', msg => {
  console.log(msg)
  main()
})