        //imports
        require('dotenv').config();
        const express = require('express');
        const mongoose = require('mongoose');
        const AuthRouter = require('./routes/Authroutes')
        const CONFIG = require('./configs/database');   
        const bodyParser = require('body-parser');
        const BusRouter = require('./routes//Busroutes')
        const passengerRouter = require('./routes/Passenger.routes');


        const app = express();
        const port = process.env.PORT || 2121;


    // JSON Body parser
         app.use(bodyParser.json());

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
        

        // API Endpoints 
        app.use('/api/auth', AuthRouter );
        app.use('/api/Bus/', BusRouter);
        app.use('/api/Details', passengerRouter);


      //start the server.
        app.listen(port,() => {
            console.log(`Server is running on port ${port}`);
        })




