let express = require('express')
let app = express()


app.get('/home',function(req,res){
	
	res.sendFile(__dirname,'home_page.html')
})

app.listen(8000,function(){
	console.log("server is running at 8000")
})