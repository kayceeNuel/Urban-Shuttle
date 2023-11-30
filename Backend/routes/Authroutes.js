

const express = require('express');
const AuthController = require('../controllers/Authcontroller');
const AuthRouter = express.Router();

// AuthRouter.post('/register', AuthController.register);  
// AuthRouter.post('/login', AuthController.login)


//Using a Callback function. 
AuthRouter.post('/register' ,(req,res) => {
    AuthController.register(req,res);
})

AuthRouter.post('/login', (req,res) => {
    AuthController.login(req,res)
})

module.exports = AuthRouter;