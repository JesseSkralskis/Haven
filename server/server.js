const express = require('express');
const { createServer } = require('http');
const morgan = require('morgan');
const compression = require('compression');

const app = express();
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');
const port =  process.env.PORT || 3030;
const dev = app.get('env') !== 'production'



if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
    app.use(express.static(buildPath));

    app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

if (dev) {
    app.use(morgan('dev'))
}


const server = createServer(app);

server.listen(port, err => {
    if (err) throw err
    console.log('Server started')
})