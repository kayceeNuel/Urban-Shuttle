

const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true, 
  }, 

  arrival: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  location: {
    

  },
  availableBus: {
    seatCapacity: { type: Number, required: true },
    price: { type: Number, required: true },
    class: { type: String, required: true }, 
    companyName: { type: String, required: true },
  },
});


const BusModel = mongoose.model('Bus', busSchema)
module.exports = BusModel
