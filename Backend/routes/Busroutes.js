

const express = require('express');
const BusController = require('../controllers/Buscontroller');
const BusRouter = express.Router();

 
BusRouter.post('/create', (req,res) => {
    BusController.create(req,res);
});

BusRouter.get('/get', (req,res) => {
    BusController.getBuses(req,res);
});

BusRouter.get('/id', (req,res) => {
    BusController.getBusId(req,res);
});


BusRouter.put('/:id', (req,res) => {
    BusController.updateBusId(req,res);
});

BusRouter.delete('/:id', (req,res) => {
    BusController.deleteBusId(req,res)
});



module.exports= BusRouter;

