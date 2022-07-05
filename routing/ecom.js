const express=require("express")
const router=express.Router()
const port=3000
// const workingdir="F:/notesaves/"
const path = require('path');

router.get('/ecom/login',(req,res) =>{
res.sendFile(path.join(__dirname+'/loginform.html'));
});

router.get('/ecom/aboutus',(req,res) =>{
    res.sendFile(path.join(__dirname+'/aboutpag.html'));
    })

    router.get('/ecom/home',(req,res) =>{
        res.sendFile(path.join(__dirname+'/page4.html'));
        })
router.get('/ecom/data',(req,res)=>{
    res.send("hello")
})
module.exports=router 