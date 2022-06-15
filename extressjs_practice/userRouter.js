
const router=require('express').Router()
router.get('/login',(req,res)=>{
res.send("Lgin route")
})
router.get('/signup',(req,res)=>{
res.send("Signup route")
})
router.get('/logout',(req,res)=>{
res.send("logout route")
})

// exports.router=router
module.exports=router