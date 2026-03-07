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
    resetcode:{
        type:String,
        default:null
    }
}, {timestamps:true})   

module.exports = userModel