const express = require('express')
const router = express.Router()
const {register, login, logout, check,edit} = require('../controllers/auth.controllers')
const verifyToken = require('../middlewares/verification.middleware')

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/edit/:id" , verifyToken, edit)
router.get("/check", verifyToken, check)

module.exports = router