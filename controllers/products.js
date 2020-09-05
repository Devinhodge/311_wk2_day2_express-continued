const products = require('../data/products');

//Shows all products
const list = (req, res)=>{
  res.json(products);
};

// Shows one product by id
const show = (req, res)=>{
  let product = products.find(product=>product._id==req.params.id);
  res.json(product)
};

// add product
const create = (req, res)=>{
  let counter = products.length+1;
  let addProduct = req.body;
    addProduct._id = counter;
    //adding new product
    products.push(addProduct);
    //return response
    res.json(products);
};

module.exports = {list, show, create};
