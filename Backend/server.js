    require('dotenv').config();
    const express = require('express');
    const mongoose = require('mongoose');
    const CONFIG = require('./configs/database');
    const bodyParser = require('body-parser');


    const app = express();
    const port = process.env.PORT || 2121;

    
    mongoose.connect(CONFIG.database).then(
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


    app.listen(port,() => {
        console.log(`Server is running on port ${port}`);
    })



