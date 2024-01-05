
const mongoose = require('mongoose');

const passengersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    lastname : {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },
    
    email: {
        type: String,
        required: true,
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