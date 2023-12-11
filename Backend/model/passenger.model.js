
const mongoose = require('mongoose') 

const passengersSchema = new mongoose.Schema({
    Name: String, 
    email: String, 
    phoneNumber: Number,
})

const passengersModel = mongoose.model('passenger', passengersSchema)
module.exports = passengersModel