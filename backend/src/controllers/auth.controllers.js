const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const genToken = require("../utils/token")

const register = async (req,res)=>{
    const {name, email, password, createdAt} = req.body
    try {
        const existingUser = await userModel.findOne({email})
        if(existingUser) return res.status(409).json({message:"User already exists"})
             const hashedPassword = await bcrypt.hash(password,10)
            const user = await userModel.create({
                name:name,
                email:email,
                createdAt:createdAt
            })

            genToken(user._id, res)

            res.status(200).json({message:"User created Successfully!", user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}
const login = async (req,res)=>{

    const {email, password} = req.body

    try {
        const user = await userModel.findOne({email}).select("-password")    
        if(!user) return res.status(404).json({message:"User not found"})
            const verifiedPassword = await bcrypt.compare(password, user.password)
        if(!verifiedPassword) return res.status(409).json({message:"Something went wrong, check your email or password"})
            genToken(user._id, res)
            res.status(200).json({message:"User logged in successfully", user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }

}
const logout = (req,res)=>{
    try {
        res.cookie("token", "")
        res.status(200).json({message:"User loggedOut seccessfully"})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

const edit = async (req,res)=>{
    const {id} = req.params
    const {name,email,password} = req.body
    try {
        let updateData = {name, email}
        if(password) {
            const hashedPassword = await bcrypt.hash(password, 10)
            updateData.password = hashedPassword
        }   

        if(!updateData) return res.status(404).json({message:"Invalid Info"})

        const updatedUser = await userModel.findByIdAndUpdate(id, updateData, {new:true}).select("-password")
        res.status(200).json({message:"User updated successfully", updatedUser})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

const check = async (req,res)=>{
    const id = req.user._id

    try {
        const user = await userModel.findById(id).select("-password")
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }

}

module.exports = {register, login, logout, check, edit}

