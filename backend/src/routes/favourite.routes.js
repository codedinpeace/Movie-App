const express = require('express')
const router = express.Router()

const {addFavourites, removeFavourites} = require('../controllers/favourites.controller')
const verifyToken = require('../middlewares/verification.middleware')

router.post("/add-favourites/:movieId", verifyToken, addFavourites)
router.post("/remove-favourites/:movieId", verifyToken, removeFavourites)

module.exports = router 