const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

// const snarky = require('./middlewares/snarky')
const gameRouter = require('./routes/gameRoutes')
const mainRouter = require('./routes/mainRoutes')
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}).then(()=>{
    console.log('MongoDB Connected')
}).catch((err)=>console.log(`Mongo Error: ${err}`))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// app.use(snarky)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})


app.use('/api/v1/games',gameRouter);