

const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/payment.controller');


paymentRouter.post('/create-customer',(req,res) => {
    paymentController.createNewCustomer(req,res)
});

paymentRouter.post('/add-card', (req, res) => {
    paymentController.addCustomersCard(req,res);
});

paymentRouter.post('/create-charges', (req, res) => {
    paymentController.chargeCustomers(req,res)
});

module.exports = paymentRouter;