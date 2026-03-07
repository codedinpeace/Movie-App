const cookieParser = require('cookie-parser')
const express = require('express')
const authRoutes = require('./routes/app.routes')
const connectDB = require('./utils/db.connect')


const app = express()

// express middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie middleware
app.use(cookieParser())

// routes
app.use("/app/auth", authRoutes)

// Database
connectDB()

app.get("/", (req,res)=>{
    res.send("Hello World")
})


module.exports = app