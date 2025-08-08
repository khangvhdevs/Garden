const express = require('express');

const productsController = require('../controller/products');

const router = express.Router();

const products = [];

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
exports.products = products;