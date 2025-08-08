const express = require('express');
const connectDB = require('./config/Db');
const app = express();

const userroute = require('./Routes/userRoute');

const http = require('http').Server(app)
app.use(express.json())
connectDB();

app.use('/api/userrouter',userroute)



const port = 5000;
http.listen(port,()=>{
    console.log(`Server is Running on  :${port}`)
})