const express = require("express");
const router = express.Router();
const products = require('../data/products');

router.get('/products');
router.get('/products/id:');
router.post('/products');

module.exports = router;