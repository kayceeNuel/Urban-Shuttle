        //imports
        require('dotenv').config();
        const express = require('express');
        const cors = require('cors');
        const mongoose = require('mongoose');
        const bodyParser = require('body-parser');
          
        const authRouter = require('./routes/Authroutes');
        const busRouter = require('./routes//Busroutes');
        const passengerRouter = require('./routes/Passenger.routes');
        const paymentRouter = require('./routes/payment.routes');

        const CONFIG = require('./configs/database'); 


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
                console.log('Unable to connect to the database' + err);
            }
        );
 

        app.get('/', (req, res)=>{ 
            res.send('Hello, World!')
        }) 
        

        // ROUTES
        app.use('/api/auth', authRouter);
        app.use('/api/bus', busRouter);
        app.use('/api/details', passengerRouter);
        app.use('/api/payments', paymentRouter);

      //start the server.
        app.listen(port,() => {
            console.log(`Server is running on port ${port}`);
        })




