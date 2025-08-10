const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

const products = [];

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);



exports.routes = router;
exports.products = products;