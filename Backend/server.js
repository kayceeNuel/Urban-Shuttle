    // require('dotenv').config();
    // const express = require('express');
    // const mongoose = require('mongoose');
    // const CONFIG = require('./configs/database')


    // const app = express();
    // const port = process.env.PORT || 2121;


    // mongoose.connect(CONFIG.database, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true, 
    //   })
    //     .then(() => {
    //       console.log("Connected to the database");
    //     })
    //     .catch(error => {
    //       console.error("Database Connection failed:", error);
    //     });
        


    // app.get('/', (req, res)=>{
    //     res.send('Hello, World!')
    // })


    // app.listen(port,() => {
    //     console.log(`Server is running on port ${port}`);
    // })


    require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const CONFIG = require('./configs/database');

console.log('MONGODB_URI from CONFIG:', CONFIG.database);

const app = express();
const port = process.env.PORT || 2121;

mongoose.connect(CONFIG.database, { useNewUrlParser: true }).then(
    () => {
        console.log('Database Connected');
    },
    (err) => {
        console.log('Database Connection failed' + err);
    }
);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
