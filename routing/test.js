// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
  // res.send('Hello World!')
// })

// app.get('/home', (req, res) => {
  // res.send('Hello Welcome Home !')
// });

// app.get('/contact', (req, res) => {
  // res.send('Hello Get Contact ')
// });

// app.get('/ab?cd', (req, res) => {
  // res.send('ab?cd')
// })

// app.get('/ab*cd', (req, res) => {
  // res.send('ab*cd')
// })

// app.get(/.*fly$/, (req, res) => {
  // res.send('/.*fly$/')
// })

// app.get(/a/, (req, res) => {
  // res.send('/a/')
// })

// app.get('/users/:id', (req, res) => {
  // res.send(`the information of users ${req.params.id}`)
  // // res.send(req.params.id);
// })

// app.get('/college/:branch/student/:id ', (req, res) => {
// res.send(`student branch and id is  $(req.params.branch} <br> ${req.params.id}`)
// })
const express = require('express')
const app = express()
const port = 3000

student=require('./roots/students')
teacher=require('./roots/teacher')
ecom=require('./roots/ecom')
app.use(student);
app.use(teacher);
app.use(ecom);

// app.get('/login',function(req,res) {
//   res.sendFile(path.join(__dirname+'/loginform.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});