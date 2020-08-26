const {Router}=require("express");

const router=Router();

router.get('/st/:sNo',(req,res)=>{
    const studentNo=req.params.sNo;
    return res.json(studentNo);

});

module.exports=router;