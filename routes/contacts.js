const express = require("express");
const router = express.Router();

//create access to controller
const controller = require('../controllers/contacts');

//get all contacts
router.get('/contacts', controller.list);

//get one contact
router.get('/contacts/id:', controller.show);

//add contact
router.post('/contacts', controller.create);

module.exports = router;
