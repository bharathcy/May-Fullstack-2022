var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path')

var formidable = require('formidable')
var ejs = require('ejs')
var mongoose = require('mongoose')
var session = require('express-session')

app.use(session({secret:'Hi This is scret key'}))
//set the ejs engine using app.set(). this method tells the express which template we are using

app.set('view engine','ejs')

//mapping the EJS engine to allow the all ejs file exetensions
app.engine('ejs',require('ejs').__express) 
app.use(express.static('uploads'))
//define the connection between mongodb and nodejs

mongoose.connect('mongodb://localhost/Flipkart')


// define the functions for getting data the based on username
let insert_item = (collection_name,item) =>
{
	const collection = mongoose.connection.db.collection(collection_name)
	
	return collection.insertOne(item)
}

let get_item = (user,pwd)=>{
	const collection = mongoose.connection.db.collection('user_details')
	
	//console.log(collection.find({}))
	return collection.find({username:user,password:pwd}).toArray()
}
//render the login page

app.get(['/register','/logout/registration.html','/profile/registration.html'],function(req,res){
	res.sendFile(__dirname+"/views/registration.html")
})


app.post('/insertion',async function(req,res){
	let forms = formidable({multiplies:true})
	forms.parse(req,async function(err,fields,files){
		console.log(fields)
		
		insert_item('user_details',fields)
		
		if(err){
			res.send(String(err))
			return 
		  }
		  
		  req.session.user_id=fields['username']
		  req.session.pwdid = fields['password']
		  let details_data = await get_item(req.session.user_id,req.session.pwdid)
		  if(details_data.length !=0)
		  {
		      res.render('profile_page',{"data":await get_item(req.session.user_id,req.session.pwdid)})
		  }
	})
	
})

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/views/login_page.html")
})

app.post('/profile',async function(req,res){
	const form = formidable({multiplies:true})
	form.parse(req,async function(err,fields,files){
		req.session.user = fields['username']
		req.session.pwd = fields['password']
		let details = await get_item(req.session.user,req.session.pwd)
		if(details.length != 0)
		{
		  res.render('profile_page',{"data":await get_item(req.session.user,req.session.pwd)})
		}else{
		  res.render('login',{Msg:'your userid or Password is incorrect.If you are new to flipkart please click on Create an Account'},function (err, html) {
		  res.send(html)
		  
	})}
	})

})

app.get('/logout',function(req,res){
	req.session.destroy(function(err){

		console.log("logged out")
	})
	
	res.sendFile(__dirname+"/views/login_page.html")
})




//deletion

let getall = (collection_name)=>{
	const collection = mongoose.connection.db.collection(collection_name)
	
	//console.log(collection.find({}))
	return collection.find({}).toArray()
}

app.get('/database',async function(req,res){
	console.log(await getall('user_details'))
	res.render('db_modification',{"details":await getall('user_details')})
})

//remove 

let remove_item = (collection_name,item) => {
	let collection = mongoose.connection.db.collection(collection_name)
	
	return collection.remove({first_name:item})
}

app.delete("/delete/:id",async function(req,res){
	try{
		
		const collection = mongoose.connection.db.collection('user_details')
		const deletedata = await collection.findByIdAndDelete(req.params.id)
		if(!req.params.id)
		{
			return res.status(404).send()
		}
		res.send(deletedata)
	}catch(e)
	{
		res.status(404).send(e)
	}
})

//define the serevr

app.listen(9090,function()
{
	console.log('the port is running at 9090')
})