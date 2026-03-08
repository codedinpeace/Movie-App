const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const verifyToken = async (req,res,next) => {
    const token = req.cookies.token

    try {
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET_TOKEN}`)
        if(!decoded) return res.status(409).json({message:"invalid token"})
            const user = await userModel.findById(decoded.userId)
            req.user = user
            next()
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

module.exports = verifyToken