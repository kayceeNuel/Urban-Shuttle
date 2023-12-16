

const stripe = require('stripe');
const stripe_secret_key = process.env.STRIPE_SECRET_KEY; 
const stripe_public_key = process.env.STRIPE_PUBLIC_KEY ;



module.exports = paymentController;