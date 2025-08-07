const path = require('path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.render('shop', {
        pageTitle:'Shop', 
        prods: products, 
        docTitle: 'Shop', path:'/', 
        hasProducts: products.length > 0, 
        activeShop: true,
        productCSS: true
    });
})

module.exports = router;