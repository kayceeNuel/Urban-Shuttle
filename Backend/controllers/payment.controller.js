

const stripe_key = process.env.STRIPE_SECRET_KEY ; 
const stripe = require('stripe')(stripe_key);


const paymentController = {

    createNewCustomer: async (req, res) => {
        try {
            const customer = await stripe.customers.create({
                name: req.body.name,
                email: req.body.email,
            });
            res.status(200).json(customer);
        } catch (error) {
            console.error('Error creating Card', error);
            res.status(500).json({ error: 'Something went wrong on Stripe`s end. (These are rare.)' });
        }
    },

    addCustomersCard: async (req, res) => {

        const {
                customer_id, 
                card_Name, 
                card_ExpYear, 
                card_ExpMonth, 
                card_Number, 
                card_CVC,
            } = req.body;

            try  {
                const card_Token = await stripe.tokens.create({
                    card: {
                        name: card_Name, 
                        number: card_Number, 
                        exp_Month: card_ExpMonth,
                        exp_year: card_ExpYear, 
                        CVC: card_CVC
                    },
                });
                const addingCustomerCard = await stripe.customers.createSource(customer_id, {
                    source: card_Token.id,
                });
                return res.status(200).json(addingCustomerCard);
            } catch(error){
                console.error('error creating card:', error);
                res.status(500).json({error: 'Something went wrong on Stripe’s end. (These are rare.)'})
            }
        
    }
 }