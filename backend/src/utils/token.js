const jwt = require('jsonwebtoken')

const genToken = (userId, res) => {
    try {
        const token = jwt.sign({userId}, `${process.env.JWT_SECRET_TOKEN}`)
        res.cookie("token", token)
        // res.status(200).json({message:"Token created Successfully"})
    } catch (error) {
        res.status(400).json({message:"Something went wrong", error})
    }
}

module.exports = genToken