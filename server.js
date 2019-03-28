const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

// Without express
const {createServer} = require('http');

async function runServer() {
    await app.prepare();
    await createServer(handler).listen(3000);
 
    console.log('run on localhost:3000')
}

runServer();
