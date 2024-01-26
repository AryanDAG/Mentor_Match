const express=require("express");
const dotenv = require("dotenv");
const colors=require("colors")
dotenv.config();
const app = express();
const PORT = process.env.PORT 





app.get('/backend',(req,res)=>{
    res.send("hello from backend");
})


app.listen(PORT,()=>{
    console.log(`server started on  ${PORT}`.bgCyan.italic);
});