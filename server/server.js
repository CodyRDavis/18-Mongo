const http = require('http');

const hostname = process.env.URL || '127.0.0.1'
const port = process.env.PORT || 3000

const listening = () => console.log(`Server listening at ${hostname}:${port}`);

exports.initServer = app => {
    http.createServer(app)
        .listen(port)
        .on('error', error => errorHandling(error))
        .on('listening', listening)
}
