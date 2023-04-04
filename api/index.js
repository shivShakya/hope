const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dontenv = require('dotenv');
dontenv.config();

app.get('/api/test',(req,res)=>{
    res.json("Hello World"+ Date.now());
})


app.listen(procee.env.API_URL || 4000);

module.exports = app;