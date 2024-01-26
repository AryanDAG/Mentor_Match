const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.get('/backend',(res,req)=>{
    console.log("At Get Mehtod");
    req.send("Api Get Mehthod")
})
app.listen(PORT,console.log(`server run at port ${PORT}`));