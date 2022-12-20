const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
const path = require('path')

const app = express()
// BodyParser Middleware
app.use(bodyParser.json())

//DB Config
const db = require('./config/keys').mongoURI
// connect to mongo
mongoose.set("strictQuery", false)
mongoose.connect(db,()=>console.log('MongoDB Connect...'))
    .catch(err=>console.log(err))

//Use Routes
app.use('/api/items',items)

//set static folder
app.use(express.static(path.join(__dirname,'./client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})


const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`Sever started on port ${port}`))

