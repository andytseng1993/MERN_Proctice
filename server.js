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

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`Sever started on port ${port}`))

