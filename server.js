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
app.use(express.static("frontend"));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coc',
    { useUnifiedTopology: true, useNewUrlParser: true });
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
router.get('/products/:pid', products.getProductById);
router.post('/products', products.addProduct);
router.put('/products/:pid', products.updateProductById);
router.delete('/products/:pid', products.deleteProductById);
// ===============================


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', cors(), router);

// #10 Start the server
app.listen(port, function () {
    // ===============================
    console.log('Magic happens on http://localhost:' + port);
});