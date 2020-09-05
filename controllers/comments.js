const comments = require('../data/comments');


// Shows all comments
const list = (req, res)=>{
  res.json(comments);
};


// Shows one comment by id
const show = (req, res)=>{
  let comment = comments.find(comment=>comment._id==req.params.id);
  res.json(comment)
};

//add comment
const create = (req, res)=>{
  let counter = comments.length+1;
  let addComment = req.body;
    addComment._id = counter;
    addComment.postId = 1;
    //adding new comment
    comments.push(addComment);
    //return the response
    res.json(comments);

};

module.exports = {list, show, create};