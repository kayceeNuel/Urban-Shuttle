

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
    required: true,

  },

  bookedSeat: {
    type: [
      {
        seatNumber: {type: String, required: true},
        isAvailable: {type: Boolean, default: true}
      }
    ]
  },
  

 
});


const BusModel = mongoose.model('Bus', busSchema)
module.exports = BusModel
