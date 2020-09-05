const contacts = require('../data/contacts');


// Shows all contacts
const list = (req, res)=>{
  res.json(contacts);
};

// Shows one contact by id
const show = (req, res)=>{
  let contacts= contacts.find(contact=>contact._id==req.params.id);
  res.json(contact)
};

//add contact
const create = (req, res)=>{
  let counter = contacts.length+1;
  let addContact = req.body;
    addContact._id = counter;
    addContact.name = req.body.name;
    addContact.occupation = req.body.occupation;
    addContact.avatar = req.body.avatar;
    //adding new contact
    contacts.push(addContact);
    //return the response
    res.json(contacts);
};

module.exports = {list, show, create};

