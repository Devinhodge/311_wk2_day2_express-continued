const express = require("express");
const router = express.Router();
const vehicles = require('../data/vehicles');

router.get('/vehicles');
router.get('/vehicles/id:');
router.post('/vehicles');

module.exports = router;