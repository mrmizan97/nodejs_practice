
const router=require('express').Router()
router.get('/',(req,res)=>{
res.send("All post")
})
router.get('/:id',(req,res)=>{
res.send("Signle post ID : "+req.params.id)
})
router.post('/',(req,res)=>{
res.send("Post create")
})
router.put('/',(req,res)=>{
res.send("update our existing data")
})
router.delete('/',(req,res)=>{
res.send("delete our existing data")
})


// exports.router=router
module.exports=router