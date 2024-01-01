

const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/payment.controller');


paymentRouter.post('/payment',(req,res) => {
    paymentController.payment(req,res)
});


module.exports = paymentRouter;