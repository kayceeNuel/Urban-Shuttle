
const userModel = require('../model/usermodel');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const Secret_Key = process.env.SECRET_KEY; 



const AuthController = {
    register: async (req, res) => {
        try {
            const {firstname, lastname, username, password, email, countrycode, phonenumber} = req.body;

            
            //Check the emptyness of the incoming data 
            if (!firstname || !lastname || !username || !email || !countrycode || !phonenumber) {
                return res.status(400).json({error: 'Please fill out all fields.'})
            };

            // Check if the user already exists or Not!

            //existed name ? 
            const exisitngUsername  = await userModel.findOne({username});
            if (exisitngUsername) {
                return res.status(400).json({error: 'Username already exists.'})
            };

            // existed email
            const exisitngEmail = await userModel.findOne({ email });
            if (exisitngEmail) {
                return res.status(400).json({error: 'Email already exists.'})
            };

            // email validation 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if  (!emailRegex.test(email)) {
              return  res.status(400).json({error: 'Invalid email format'});
            };
            //Password length
            if (password.length < 6) {
                return res.status(400).json({error: 'Password must be at least 6 characters long'});
            };
            const hashedPassWord = await bcrypt.hash(password, 10);


            const newUser = userModel ({
                firstname,
                lastname,
                email,
                username, 
                password: hashedPassWord,
                countrycode, 
                phonenumber
            });

            await newUser.save();

            const token = jwt.sign({ userid: newUser._id}, Secret_Key, { expiresIn: 3600 });

            res.status(201).json({message: 'Registration successful', token, user: newUser});

        } catch (error) {
            console.error(error);
            res.status(501).json({ error: 'Internal server error'})
        }
    },

    login : async (req, res) => {
        
        try {
            
            const {email , password}= req.body;

            if (!email || email.trim() === '') {
                return res.status(400).json ({error: 'Username and email is required'});
            }

            if (!password || password.trim() === '') {
                return res.status(400).json ({error: 'Password is required'})
            }

            const user = await userModel.findOne( {
                $or: [{email}, {password}]
            })

            if (!user) {
                return res.status(400).json ({error: 'User not found'})
            };

            const passwordMatched = bcrypt.compare(password, user.password)
            if (!passwordMatched) {
                return res.status(401).json({error: 'Incorrect password'});
            };
            const token = jwt.sign({userid: user._id}, Secret_Key, {expiresIn: '1000h'});
            res.status(200).json({message: 'Login successful', token, user});


        }  catch (error){
            console.error(error);
            res.status(501).json ({error: 'Internal server error'});
        }
    },

};

    module.exports = AuthController;