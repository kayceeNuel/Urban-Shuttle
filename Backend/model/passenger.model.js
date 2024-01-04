
const mongoose = require('mongoose');

const passengersSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    
    email: {
        type: String,
        required: false,
    },

    phone: {
        type: String,  
        required: true,
        maxlength: 10,  
        minlength: 10,  
    },
});

const passengersModel = mongoose.model('passenger', passengersSchema);
module.exports = passengersModel;