

const express = require('express');
const AuthController = require('../controllers/Authcontroller');
const AuthRouter = express.Router();

// AuthRouter.post('/signIn', AuthController.signIn);  
// AuthRouter.post('/login', AuthController.login)


//Added a callback function to the Routes 
AuthRouter.post('/signIn' ,(req,res) => {
    AuthController.signIn(req,res);
})

AuthRouter.post('/login', (req,res) => {
    AuthController.login(req,res)
})

module.exports = AuthRouter;