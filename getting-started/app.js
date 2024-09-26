const http = require('http');
const express = require('express');
const path = require('path');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use(errorRoutes);

const server = http.createServer(app);

server.listen(3000);
