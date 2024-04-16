const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema({

    firstName : {
        type : String, 
        required : true, 
        min : 2, 
        max : 17
    },
    lastName : {
        type : String, 
        required : true, 
        min : 2, 
        max : 17
    },
    email : {
        type : String, 
        required : true, 
        unique : true
    },
    password : {
        type : String, 
        required : true, 
        min : 5, 
    },
    bio : {
        type : String, 
        required : false,
        default : ""
    },
    picturePath : {
        type : String, 
        required : false,
        default : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg"
    },
    cover : {
        type : String, 
        required : false,
        default : "https://apod.nasa.gov/apod/image/0905/carina2_hst.jpg"
    },
    friends : {
        type : [String], 
        default : []
    },
    location : {
        type : String, 
        required : false, 
        default : ""
    },
    occupation : {
        type : String, 
        required : false, 
        default : ""
    },
    viewedProfile : {
        type : Number, 
        default : 0,
        required : false
    },
    impressions : {
        type : Number, 
        default : 0,
        required : false
    },
    linkedin : {
        type : String, 
        required : false
    },
    twitter : {
        type : String, 
        required : false
    },
    isAdmin : {
        type : Boolean, 
        default : false
    }
}, {
    timestamps : true
});




module.exports = mongoose.model('users', schemaUser);