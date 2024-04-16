const users = require("../models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const isFound = await users.findOne({
            email
        });
        if(!isFound){
            res.status(204).send('Invalid credentials.');
        }
        else{
            const isMatch = await bcrypt.compare(password, isFound.password);
            if(isMatch){
                //we create a token
                const token = jwt.sign(
                    {
                        email : isFound.email, 
                    },
                    process.env.TOKEN_PASS,
                    {
                        expiresIn : "2d"
                    }
                );
                res.status(200).json({
                    token : token, 
                    _id   : isFound._id 
                })
            }
            else{
                console.log(e.message);
            }
        }
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);    
    }
}


module.exports = login;