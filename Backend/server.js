        //imports
        require('dotenv').config();
        const express = require('express');
        const cors = require('cors');
        const mongoose = require('mongoose');
        const AuthRouter = require('./routes/Authroutes')
        const CONFIG = require('./configs/database');   
        const bodyParser = require('body-parser');
        const BusRouter = require('./routes//Busroutes')
        const passengerRouter = require('./routes/Passenger.routes');
        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        // const paymentRouter = require('./routes/payment.routes')


        const app = express();
        const port = process.env.PORT || 2121;


    // Middelwares
         app.use(bodyParser.json());
         app.use(cors());


         //connect to database
         mongoose.connect(CONFIG.database,).then(
            () => {
                console.log('Successfully Connected to Database');
            },
            (err) => {
                console.log('Can not connect to the database' + err);
            }
        );
 

        app.get('/', (req, res)=>{ 
            res.send('Hello, World!')
        }) 
        

        // ROUTES
        app.use('/api/auth', AuthRouter );
        app.use('/api/Bus/', BusRouter);
        app.use('/api/Details', passengerRouter);
        // app.use('/api/payment', paymentRouter)


      //start the server.
        app.listen(port,() => {
            console.log(`Server is running on port ${port}`);
        })




