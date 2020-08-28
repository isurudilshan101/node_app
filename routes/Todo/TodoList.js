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
          title: "leran nodejs",
          description: "learn nodejs with express"
      }
  ];

  const router=Router();

  module.exports=router;