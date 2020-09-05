const express = require("express");
const bodyParser = require("body-parser");

const commentsRoute = require('./routes/comments');
const contactsRoute = require('./routes/contacts');
const productsRoute = require('./routes/products');
const vehiclesRoute = require('./routes/vehicles');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//Set paths for routers//
app.use(commentsRoute);
app.use(contactsRoute);
app.use(productsRoute);
app.use(vehiclesRoute);

const port = process.env.PORT || 4001;


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});