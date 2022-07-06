

const express = require('express');
const router = express.Router(); 
const app = express();



app.get('/home_express', function(req,res)  {
    res.sendFile(__dirname+'/home_express.html');
    
});

app.get('/contact', function(req,res) {
    let hmg =
`{
    "x":[
        {"url":"https://en.wikipedia.org/wiki/Space_exploration",
        "heading":"Space exploraion-wikipedia",
        "Date":"22/02/2022",
        "description":"Space exploration is the use of astronomy and space technology to explore outer space. ... While the exploration of space is carried out mainly by astronomers ..."
        },
        {"url":"https://www.javascript.com",
        "heading":"Java-script",
        "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
        },
        {
        "url":"https://www.spacex.com/",
        "heading":"Space-x",
        "Date":"22/02/2022",
        "description":"NASA's real-time science encyclopedia of deep space exploration. Our scientists and hardworking robots are exploring the wild frontiers of our solar system."
        },
    {
        "url":"https://solarsystem.nasa.gov/",
        "heading":"Nasa",
        "Date":"22/02/2022",
        "description":"Space Exploration and Innovation ... Since the beginning of time, exploring the Universe has been a dream of humankind. Human curiosity has fuelled interest in ..."
    },


    {
        "url":"https://www.britannica.com/science/space-exploration",
        "heading":"Space",
        "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
    },

        {"url":"https://en.wikipedia.org/wiki/Space_exploration",
        "heading":"Space exploraion-wikipedia",
        "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
        },
        {"url":"https://www.javascript.com",
        "heading":"Java-script",
        "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
        },
        {
        "url":"https://www.spacex.com/",
        "heading":"Space-x",
        "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
        },
    {
        "url":"https://solarsystem.nasa.gov/",
        "heading":"Nasa",
         "Date":"22/02/2022",
        "description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
    }


    ]

   
}`

let converted_JS_OBJECT = JSON .parse(hmg)

console.log(converted_JS_OBJECT.x)

let div_element = ""
for (hmg of converted_JS_OBJECT.x){
    div_element += `<div>
       <p> ${hmg} </p>
        
    <h5 style="color:blue;"> ${data.url}</h5>
    <h2 style="color:blue;">${data.heading}</h2>
    <p>${data.Date}</p>
    <p style=color:gray;>${data.description}</p>
   
        
        <br>
    </div>`
}
res.send(div_element)

});


app.use('/', router);
app.listen(3000);