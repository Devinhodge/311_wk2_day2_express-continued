const express = require("express");
const router = express.Router();
const comments = require('../data/comments');

router.get('/comments');
router.get('/comments/id:');
router.post('/comments');






module.exports = router;