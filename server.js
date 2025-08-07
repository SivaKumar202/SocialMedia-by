const express = require('express');
const connectDB = require('./config/Db');
const app = express();

const userroute = require('./Routes/userRoute');

const http = require('http').Server(app)
connectDB();

app.use('/api/hello',userroute)



const port = 5000;
http.listen(port,()=>{
    console.log("App is Running")
})