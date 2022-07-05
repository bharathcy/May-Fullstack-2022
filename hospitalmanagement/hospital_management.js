var express = require('express')
var app = express()

app.get('/home',function(req,res){
	
	res.sendFile(__dirname+"/"+"home_page.html")
})

app.get('/about',function(req,res){
	res.sendFile(__dirname+"/"+"about.html")
})

app.get('/contact',function(req,res){
	res.sendFile(__dirname+"/"+"contact.html")
})

app.get('/department',function(req,res){
	res.send(`<h2>We are in Department Page</h2>
	         <button style="width:10em;height:4em;background:green;"><a href="/home" style="text-decoration:none;color:white;font-weight:bold">Home</a></button>`
    )
})

app.get('/checkup',function(req,res){
	res.send(`<h2>We are in HealthCheck Up Page</h2>
	         <button style="width:10em;height:4em;background:green;"><a href="/home" style="text-decoration:none;color:white;font-weight:bold">Home</a></button>`
    )})

app.get('/facilities',function(req,res){
	res.send(`<h2>We are in Facilities Page</h2>
	         <button style="width:10em;height:4em;background:green;"><a href="/home" style="text-decoration:none;color:white;font-weight:bold">Home</a></button>`
    )})


app.get('/info',function(req,res){
	let features=['Donec ipsum diam, pretium mollis dapibus risus. Nullam dolor nibh pulvinar at interdum eget']
	res.send(features)
	
})

app.get('/feedback',function(req,res){
	let feedback={Name:"Deepa",Age:24,contact_no:9986576977,feedback:"Good"}
	for(let f of Object.values(feedback))
	{
		res.send(f) 
	}
})

app.get('/vendor-registration',function(req,res){
	res.sendFile(__dirname+"/"+"vendor_registration.html")
	
})

app.get('/success',function(req,res){
	let success="successfully registered"
	res.send(success)
	
})

app.listen(8082,function() {
	console.log("server is running at 8082 port")
})
