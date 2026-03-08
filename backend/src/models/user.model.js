const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minLength:8,
    },
    favourites: [
        {
            tmdbID:{
                type:Number,
                required:true,
            },
            addedAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
}, {timestamps:true})   

module.exports = mongoose.model("userModel", userModel)