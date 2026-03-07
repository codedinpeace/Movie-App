const express = require('express')
const router = express.Router()
const {register, login, logout, check,edit} = require('../controllers/auth.controllers')

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/edit/:id", edit)
router.post("/check", check)

module.exports = router