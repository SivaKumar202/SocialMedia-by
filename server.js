const express = require('express');
const connectDB = require('./config/Db');
const app = express();

const userroute = require('./Routes/userRoute');
const user = require('./Routes/userRoute');

const http = require('http').Server(app)
connectDB();

app.use('/api/hello',userroute)
app.use('/api/user',user)



const port = 5000;
http.listen(port,()=>{
    console.log("App is Running")
})