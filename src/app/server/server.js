const jsonServer = require('json-server')
const middlewares = jsonServer.defaults()
const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(middlewares)
server.use(jsonServer.bodyParser);


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})