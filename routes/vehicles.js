const express = require("express");
const router = express.Router();

///allow access to controller
const controller = require('../controllers/vehicles');

//get all vehicles
router.get('/vehicles', controller.list);

//get one vehicle
router.get('/vehicles/id:', controller.show);

//add vehicle
router.post('/vehicles', controller.create);

module.exports = router;