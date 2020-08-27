const {Router}=require("express");

const router=Router();

router.put('/se2016/:seNum',(req,res)=>{
    const senumber=req.params.seNum;
    return res.json(senumber);
});

module.exports=router;