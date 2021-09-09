const express = require('express')
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//create express app
const app = express()

//app configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup database connection
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected successfully')
}).catch(err =>{
    console.log(err)
})


// setup port number
const port = process.env.port || 5000

//create server to listen for requests
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})