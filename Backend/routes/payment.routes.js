

const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/payment.controller');

// paymentRouter.post('/add-Card', paymentController.addCustomersCard);
// paymentRouter.post('/create-Charges', paymentController.chargeCustomers);

paymentRouter.post('/create_customer',(req,res) => {
    paymentController.createNewCustomer(req,res)
});

paymentRouter.post('/add-Card', (req, res) => {
    paymentController.addCustomersCard(req,res);
});

paymentRouter.post('/create-Charges', (req, res) => {
    paymentController.chargeCustomers(req,res)
});

module.exports = paymentRouter;