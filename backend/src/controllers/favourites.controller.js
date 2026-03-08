const userModel = require("../models/user.model")

const addFavourites = async (req,res) =>{
    const {movieId} = req.params 
    const userId = req.user._id
    try {
       const favourites =  await userModel.findByIdAndUpdate(userId, {$addToSet:{favourites:Number(movieId)}}, {new:true})

        res.status(200).json({message:"Added to Favourite", favourites})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

const removeFavourites  = async (req,res) => {
    const {movieId} = req.params 
    const userId = req.user._id
    try {
       const favourites =  await userModel.findByIdAndUpdate(userId, {$pull:{favourites:Number(movieId)}}, {new:true})

        res.status(200).json({message:"removed from Favourite", favourites})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}


module.exports = {addFavourites, removeFavourites}