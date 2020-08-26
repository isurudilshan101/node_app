const {Router}=require("express");

const router=Router();

router.delete('/se/stNo/:idNo',(req,res)=>{
    const idNumber=req.params.idNo;
    return res.json(idNumber);
});

module.exports=router;