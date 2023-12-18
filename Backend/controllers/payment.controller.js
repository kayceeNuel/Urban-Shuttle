

const stripe_key = process.env.STRIPE_SECRET_KEY ; 
const stripe = require('stripe')(stripe_key);


const paymentController = {

    // createNewCustomer: async (req, res)  => {
    //     try{ 
    //         const customer = await stripe.customers.create({
    //             name : req.body.name , 
    //             email: req.body.name,
    //         }); 
    //         res.status(200).send(customer)
    //     } catch(error) {
    //         console.error(error); 
    //         res.status(501).json({ 
    //             error:  'internal server error'
    //         })
    //     }
    // }

    addCustomersCard: async (req, res) => {

        
            const {
                customer_id, 
                card_Name, 
                card_ExpYear, 
                card_ExpMonth, 
                card_Numerb, 
                card_CVC,
            } = req.body;

            try  {
                const card_Token = await stripe.tokens.create({
                    card: {
                        name: card_Name, 
                        number: card_Numerb, 
                        exp_Month: card_ExpMonth,
                        exp_year: card_ExpYear, 
                        CVC: card_CVC
                    },
                });
                const addingCustomerCard = await stripe.customers.createSource
            }
        
    }
}