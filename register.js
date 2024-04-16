const users = require('../models/users');
const bcrypt = require('bcrypt');

const register = async (req, res)=>{
    try {
        const {firstName, lastName, email, password} = req.body;
        const isEmailFound = await users.findOne({
            email
        });
        if(isEmailFound){
            res.status(201).send('Email already taken.');
        }
        else{
            //we create a new user
            const saltRound = await bcrypt.genSalt(4);
            const hashedPassword = await bcrypt.hash(password, saltRound);
            const isCreated = await users.create({
                firstName, 
                lastName, 
                email, 
                password : hashedPassword
            });
            if(isCreated){
                res.status(200).send({
                    email : email, 
                    firstName : firstName, 
                    lastName : lastName
                });
            }
            else{
                res.status(202).send('Oops, something went wrong!');
            }
        }
    } 
    catch (error) {
        res.status(500).send(error.message);    
    }
}




module.exports = register;