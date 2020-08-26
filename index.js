const express=require("express");
const getRequest=require('./routes/Get/getWithParams');
const postRequest= require('./routes/Post/postWithParams');

const app=express();
app.use(postRequest);
app.use(getRequest);
//get request

// app.get("/se",(req,res)=>{
//     return res.json("hello world");
// });

//get with parameter 

// app.get("/se/:seNo",(req,res)=>{
//     const seNumber=req.params.seNo; 
//     return res.json(seNumber);

// });

// app.get("/st/:seNo",(req,res)=>{
//     const seNum=req.params.seNo;
//     return res.json(seNum);
// });
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
});