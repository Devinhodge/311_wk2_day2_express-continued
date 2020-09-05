const vehicles = require('../data/vehicles');

const list = (req, res)=>{
  res.json(vehicles);
};

//Shows one Vehicle by id
const show = (req, res)=>{
  let findVehicle = vehicles.find(vehicle=>vehicle._id==req.params.id);
  res.json(findVehicle);
};

//add vehicle
const create = (req, res)=>{
  let counter = vehicles.length+1;
  let addVehicle = req.body;
  addVehicle._id = counter;
  //adding new Vehicle
  vehicles.push(addVehicle);
  //return response
  res.json(vehicles);
};

module.exports = {list, show, create};
