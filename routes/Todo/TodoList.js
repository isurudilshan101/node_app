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
     },
    {
        id:uuid(),
        title:"leran vuejs",
        description: "learn vuejs with vuex"
    },

    {
        id:uuid(),
        title:"leran angular",
        description: "learn angular with"
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

    router.get("/getTodo",(req,res)=>{
            return res.json(todos);
    });

  //add todo to list 
  router.post("/addtodo",(req,res)=>{
      
        const body=req.body;
        body.id=uuid();
        todos=[...todos,body];
        return res.json(todos);
      });

      router.delete("/deletetodo/:id",(req,res)=>{
            const id = req.params.id;
            const isHere=todos.some(todo=>todo.id===id);
            if(!isHere){
                return res.json("todo not found");
            }
            const newtodos=todos.filter(todo=>todo.id !==id);
            todos=newtodos;
            return res.json(todos);
      });

  module.exports=router; 