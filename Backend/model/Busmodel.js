

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

  journeyDate: {
    type: String,
    required: true,
  },

  location: {
    type: {
      type: String,
      enum: ['point'],
      required: true, 
    },
    coordinates : {
      type: [Number],
      required: true
    }
  },

  busType: {
    name: String,
    type: String,
    enum: ['Business', 'economy'],

  },

  availableSeat:{
    type: Number,
    required: true, 
    default: 40, 
    maxlength: 50,
  },
  
  bookedSeat: {
    type:[]
  },

 
});


const BusModel = mongoose.model('Bus', busSchema)
module.exports = BusModel
