const express = require('express')

const clients = require('./client.js')
const products = require('./product.js')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/clientes', function (req, res) {
    res.send(clients);
  })
  app.get('/productos', function (req, res) {
    res.send(products);
  })
 
app.listen(9000)