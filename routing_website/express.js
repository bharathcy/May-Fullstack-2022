const express = require('express');
const router = express.Router(); 
const app = express();



router.get('/', (req,res) => {
    res.sendFile(__dirname+'/public/index.html');
});

router.get('/download', (req,res) => {
    res.sendFile(__dirname+'/public/download.html');
});

router.get('/about', (req,res) => {
    res.sendFile(__dirname+'/public/about.html');
});


app.use('/', router);
app.listen(3000);