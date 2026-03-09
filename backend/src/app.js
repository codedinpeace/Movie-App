const cookieParser = require('cookie-parser')
const express = require('express')
const authRoutes = require('./routes/app.routes')
const connectDB = require('./utils/db.connect')
const favouriteRoutes = require("./routes/favourite.routes")
const cors = require('cors')

const app = express()

// express middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie middleware
app.use(cookieParser())

// cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
  }));
  
// routes
app.use("/app/auth", authRoutes)
app.use("/app", favouriteRoutes)


// Database
connectDB()

app.get("/", (req,res)=>{
    res.send("Hello World")
})


module.exports = app