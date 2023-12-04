

const express = require('express');
const BusController = require('../controllers/Buscontroller');
const BusRouter = express.Router();


BusRouter.post('/reservation', (req, res) =>{
    BusController.getreservation( req,res);
});

BusRouter.get('/Available Bus', (req,res) => {
    BusController.getAvailableBus(req, res);
}); 

BusRouter.post('/Book Seat', (req, res) => {
    BusController.Book_Seat(req, res);
}); 






module.exports= BusRouter;

