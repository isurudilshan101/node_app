 const {Router}=require("express");
 const {uuid}=require("uuidv4");

  let todos=[
      {
          id:uuid(),
          title:"leran nodejs",
          description: "learn nodejs with express"
      },

      {
        id:uuid(),
        title:"leran react",
        description: "learn react with redux"
    }

   
  ];

  const router=Router();

  router.get("/todolist/:num",(req,res)=>{
      const number=req.params.num;
        return res.json(todos[number-1]);

  });

  
  router.get("/todo/:idn",(req,res)=>{
    const idno=req.params.idn;
    const todo=todos.filter(todo=>todo.id===idno);
        return res.json(todo);
  });

  module.exports=router; 