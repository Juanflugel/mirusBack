var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/appDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo Working Perfectly');
});

// Cargar Schemas 
var Bill = require('./models/app_DB_Schema_Bills.js');

// Cargar las Rutas
var bills = require('./routes/bills.js');


// set up

app.use(cors());
bills(app,Bill);


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(7777, function () {
  console.log('Mirus App BackEnd  working on port 7777');
});