// call the packages we need
// #1 Add express package to the app
var express = require('express');
// ===============================

var app = express();   
var cors = require('cors');   

// #2 Add body-parser package to the app
var bodyParser = require('body-parser');
// ===============================


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// #3 Serve static content in folder frontend
app.use(express.static('www'));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coc',
    { useUnifiedTopology: true, useNewUrlParser: true });
var Product = require('./models/product');

app.get('/', function (req, res) {
    res.send('Express is running');
});

app.get('/api', function (req, res) {
    var version = { version: "1.0b" };
    res.json(version);
});
// ===============================

var port = process.env.PORT || 8080; 

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var products = require('./api');
router.get('/products', products.getAllProducts);
router.get('/products/:pid', products.getProductById);

// #4 Complete the routing for POST, PUT, DELETE
router.get('/products', products.getAllProducts);
router.get('/products/:pid', products.getProductsById);
router.post('/products', products.addProducts);
router.put('/products/:pid', products.updateProductsById);
router.delete('/products/:pid', products.deleteProductsById);
// ===============================


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', cors(), router);

// #10 Start the server
// ===============================
console.log('Magic happens on http://localhost:' + port);