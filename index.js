const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect('mongodb://localhost:27017/rtvDB',
{
        useNewUrlPaser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
},
() => console.log("Connect to the DB")
)

// routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use("/api/issue", require("./routes/issueRouter"))
app.use("/api/comment", require("./routes/commentRouter"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// server run-time
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})