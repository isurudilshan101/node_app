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

  router.get("/todolist",(req,res)=>{
        return res.json(todos);
  });

  module.exports=router;