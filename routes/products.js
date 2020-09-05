const express = require("express");
const router = express.Router();

//set access to controller
const controller = require('../controllers/products');

//get all products
router.get('/products', controller.list);

//get one product
router.get('/products/id:', controller.show);

//add product
router.post('/products', controller.create);

module.exports = router;