const jsonSever = require('json-server');
const server = jsonSever.create();
const router = jsonSever.router('db.json');
const middlewares = jsonSever.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);