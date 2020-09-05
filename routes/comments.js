const express = require("express");
const router = express.Router();

//creat access to the controller
const controller = require('../controllers/comments');


//get all comments
router.get('/comments', controller.list);

//get one comment
router.get('/comments/id:', controller.show);

//add comment
router.post('/comments', controller.create);

module.exports = router