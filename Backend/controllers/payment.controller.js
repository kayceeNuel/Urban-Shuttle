const stripe_key = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripe_key);

const paymentController = {
  payment: async (req, res) => {
    try {
      const { id, duration, cardNumber, expMonth, expYear, card_CVC, name, email, charge } = req.body;

      // Create a customer
      const customer = await stripe.customers.create({
        name: name,
        email: email,
      });

      if (customer) {
        try {
          // Create a card token
          const cardToken = await stripe.tokens.create({
            card: {
              number: cardNumber,
              exp_month: expMonth,
              exp_year: expYear,
              cvc: card_CVC,
            },
          });

          // Add the card to the customer
          const addingUserCard = await stripe.customers.createSource(customer.id, {
            source: cardToken.id,
          });

          // Charge the customer
          const chargeResult = await stripe.charges.create({
            amount: charge, 
            currency: 'usd', 
            customer: customer.id,
            description: 'Payment for service', 
          });

          res.status(201).json({
            success: true,
            AmountCharged: chargeResult.amount / 100,
            message: 'Payment successfully made.',
          });
        } catch (error) {
          return res.status(501).json({
            error: 'Internal server error',
            success: false,
            message: `Error in ${error.type}. and error is: ${error.message}`,
          });
        }
      }
    } catch (error) {
      return res.status(400).json({
        error: 'Bad Request',
        success: false,
        message: `Error in request body: ${error.message}`,
      });
    }
  },
};

module.exports = paymentController;
