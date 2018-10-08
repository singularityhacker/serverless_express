const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to serverless express!')
})

module.exports.handler = serverless(app);