const express = require('express');

const app = express();

const port = 3000;

app.use('/static', express.static('public') );


app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/F',(req,res)=>{
    res.sendFile(__dirname+"/faq.html")
})


app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`);
})