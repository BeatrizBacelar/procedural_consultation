const express = require('express');
var cors = require('cors');
const app = express();
const router = express.Router();
const res = require('express/lib/response');

//Rotas
const index = require('./routes/index');
const processRoute = require('./routes/processRoute');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/welcome', index);
app.use('/', processRoute);

module.exports = app;