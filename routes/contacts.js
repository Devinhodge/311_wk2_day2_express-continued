const express = require("express");
const router = express.Router();
const contacts = require('../data/contacts');

router.get('/contacts');
router.get('/contacts/id:');
router.post('/contacts');

module.exports = router;
