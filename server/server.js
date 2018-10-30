//Server
const express = require('express');
const server = express();

//Middleware
const configMiddleware = require('./middleware/middleware.js');
configMiddleware(server);

//Routes
const routes = require('./routes/routes.js');
server.use('/api', routes);


//PORT
let port = process.env.PORT;
if(port == null || port == "") {port = 8000};
server.listen(port, () => {
    console.log(`\n=== Listening on http://localhost:${port} ===\n`);
});