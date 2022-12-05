const express = require('express')
const app = express()
const port = 8800
const cors = require("cors");
require("dotenv").config();
const mongoose=require("mongoose")
const route = require ("./route")
const cookieParser = require("cookie-parser")


mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>{
    console.log(err.message);
})


app.use('/',route)
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Api is working...')
})


app.listen(port, () => {
  console.log(`Express app running on port ${port}`)
})