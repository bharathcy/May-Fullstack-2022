// db.createcollection("person",{
//     "email":String,
//     "password":String,
//     "name":String,
//     "phone":String,
//     "address":String,
//     "pincode":string
// })

// db.person.insertone({email:"nikkinikhil@gmail.com",password:"123456",name:"nikki",phone:987654321,address:"1-2-3",
// pincode:"500079"})
const mongoose = require("../index");
 
// create an schema
var userSchema = new mongoose.Schema({
            name: String,
            password: String,
            email:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);