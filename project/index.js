const express=require("express");
const mongoose=require("mongoose");
const formidable=require("formidable");



const app=express();

var session = require('express-session')



mongoose.connect("mongodb://localhost:27017/student2")
app.set("view engine","ejs");

const getall = (collection_name,user,pwd) =>
{
	const collection = mongoose.connection.db.collection(collection_name)
	return collection.find({email:user,password:pwd}).toArray()
}



 app.get("/",(req,res)=>{
   res.sendFile(__dirname+'/flip.html')
});

 app.get("/login",(req, res)=>{
    res.sendFile(__dirname+'/login.html')

});
app.post('/home',async function(req,res){
    const form = formidable({multiplies:true})
	form.parse(req,async function(err,fields,files){
        req.session.user=fields['username']
        req.session.pwd=fields['password']

        let details=await getall("person",req.session.user,req.session.pwd);
      
        if(details.length!=0){
            res.render('home',{"student2": await getall('person',req.session.user,req.session.pwd)})
        }else{
            res.render('login',{Msg:'wrong student2'},function (err, html) {
                res.send(html)
                
          })
        }
    })

})






app.listen(3000,()=>{
    console.log("listening to port 3000")
})