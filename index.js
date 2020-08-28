const express=require("express");
const getRequest=require('./routes/Get/getWithParams');
// const postRequest= require('./routes/Post/postWithParams');
// const deleteRequest=require('./routes/Delete/deleteWithParams');
// const putRequest=require('./routes/Put/putWithParams');
// const postWithBody=require('./routes/Post/postWithBody');

const todolist=require("./routes/Todo/TodoList");
const app=express();
app.use(express.json());

app.use(todolist);

// app.use(postRequest);
 app.use(getRequest);
// app.use(deleteRequest);
// app.use(putRequest);

//app.use(postWithBody);

//get request

// app.get("/se",(req,res)=>{
//     return res.json("hello world");
// });

//get with parameter 

app.get("/se/:seNo",(req,res)=>{
    const seNumber=req.params.seNo; 
     return res.json(seNumber);

});

// app.get("/st/:seNo",(req,res)=>{
//     const seNum=req.params.seNo;
//     return res.json(seNum);
// });
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
});