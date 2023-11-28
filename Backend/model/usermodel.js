
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String, 
    username : String,
    email : String, 
    password : String, // will store hash password insteady of plain. 
    countrycode : String,
    phonenumber: Number
})
    const userModel = mongoose.model('User',userSchema)
    module.exports = userModel 