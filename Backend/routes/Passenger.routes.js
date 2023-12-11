

const express = require('express');
const passengerController = require('../controllers/passenger.controller');
const passengerRouter = express.Router();


passengerRouter.post('/Details', (req,res) =>{
    passengerController.passengersInfo(req,res)
})

module.exports = passengerRouter;