
const express = require('express');
const  paymentController = require('../controllers/payment.controller');
const paymentRouter = express.Router();

paymentRouter.post('/payment_checkout', (req,res) => {
    paymentController.payment_checkout(req,res);
})

module.express = paymentRouter;