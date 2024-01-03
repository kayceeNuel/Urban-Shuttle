

const express = require('express');
const BusController = require('../controllers/Buscontroller');
const BusRouter = express.Router();

 
BusController.post('/create', (req,res) => {
    BusController.create(req,res);
});

BusController.get('/get', (req,res) => {
    BusController.getBuses(req,res);
});

BusController.get('/id', (req,res) => {
    BusController.getBusId(req,res);
});


BusController.put('/:id', (req,res) => {
    BusController.updateBusId(req,res);
});

BusController.delete('/id', (req,res) => {
    BusController.deleteBusId(req,res)
});



module.exports= BusRouter;

