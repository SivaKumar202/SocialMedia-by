const express = require('express');
const connectDB = require('./config/Db');
const app = express();

const http = require('http').Server(app)
connectDB();
const port = 5000;
http.listen(port,()=>{
    console.log("App is Running")
})