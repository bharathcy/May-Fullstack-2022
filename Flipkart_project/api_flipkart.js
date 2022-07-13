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
app.engine('html',require('ejs').__express) 
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
	try
	{
	      res.sendFile(__dirname+"/views/registration.html")
		  console.log(req.url)
	} 
	catch(e){
		
	}
	
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

let remove_item = (collection_name,name) => {
	let collection = mongoose.connection.db.collection(collection_name)
	
	return collection.remove({first_name:name})
}


app.get("/delete/:name",async function(req,res){
	try{
		
		const deletedata = await remove_item("user_details",req.params.name)
		
		if(!req.params.name)
		{
			return res.status(404).send()
		}
		res.render('db_modification',{"details":await getall('user_details')})
		//res.send(req.params.name)
	}catch(e)
	{
		res.status(404).send(e)
	}
})


//update
/*let get_by_name = (name)=>{
	const collection = mongoose.connection.db.collection("user_details")
	
	//console.log(collection.find({}))
	return collection.find({first_name:name}).toArray()
} */

let update_item = (uname,fname,lname,email,pwd,mob,add,pin) => {
	let collection = mongoose.connection.db.collection("user_details")
	
	//return collection.update({first_name:fname},{$set:{first_name:"shweta",last_name:"patil",username:"sweta@gmail.com",password:"9986576",mobile:"99865769077",address:"hi",pin:"5678"}})
	return collection.update({first_name:uname},{$set:{first_name:fname,last_name:lname,username:email,password:pwd,mobile:mob,address:add,pin:pin}})
}

app.get('/updation/:name',async function(req,res){
             //res.render("updation",{"data": await get_by_name(req.params.name)})
			 res.sendFile(__dirname+"/views/updation.html")
			 req.session.updatename = req.params.name
	})
	
app.post('/update',async function(req,res){		
	    const formsss = formidable({multiplies:true})
	    formsss.parse(req,async function(err,fields,files){
		console.log(fields)
		
		req.session.fname = fields['first_name']
		req.session.lname = fields['last_name']
		req.session.uname = fields["username"]
		req.session.pwd = fields["password"]
		req.session.mobile = fields["mobile"]
		req.session.add = fields["address"]
		req.session.pincode = fields["pin"]
		let result = await update_item(req.session.updatename,req.session.fname,req.session.lname,req.session.uname,req.session.pwd,req.session.mobile,req.session.add,req.session.pincode)
		
		res.render('db_modification',{"details":await getall('user_details')})

		
     })

}) 
		

// logout 
app.get('/logout',function(req,res){
	req.session.destroy(function(err){

		console.log("logged out")
	})
	
	res.sendFile(__dirname+"/views/login_page.html")
})
		
			
//define the serevr

app.listen(9090,function()
{
	console.log('the port is running at 9090')
})