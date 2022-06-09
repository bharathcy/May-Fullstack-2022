let hmg =
`{
	
	"x":[
	{"url":"https://www.w3schools.com/js/",
	"heading":"JavaScript Tutorial - W3Schools",
	"description":"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
	"video":"https://www.youtube.com/embed/U-ZOvBESxP4?start=3"
},
	{"url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	"heading":"JavaScript - MDN Web Docs - Mozilla",
	"description":"27-May-2022 — JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
	"video":"https://www.youtube.com/watch?v=aFQHskH5nwo"
	},
	{
	"url":"https://en.wikipedia.org/wiki/JavaScript",
	"heading":"The Modern JavaScript Tutorial",
	"description":"Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events",
	"video":"https://www.youtube.com/watch?v=rw_8G829aug&list=RDrw_8G829aug&start_radio=1"
	},
	{"url":"https://www.youtube.com/watch?v=3s5XyooFGpg",
	"heading":"Neenaade Naa Video Song - YouTube",
	"description":"Watch the Kannada video song 'Neenaade Naa.' From 'Yuvarathnaa' by Hombale Films. Featuring the magic of love",
	"video":"https://www.youtube.com/watch?v=aFQHskH5nwo"
	}
	]
}`

let convaerted_JS_OBJECT = JSON .parse(hmg)

console.log(convaerted_JS_OBJECT.x)

let div_element = ""
for (hmg of convaerted_JS_OBJECT.x){
	div_element += `<div>
		<p> <a href="${hmg.url}">${hmg.url}</a></p>
		<h4 style="color:blue;">${hmg.heading}</h4>
		<p style="color:gray;">${hmg.description}</p>
		
		<br>
	</div>`
}
document.getElementById("demo").innerHTML = div_element


let hh=`{ "g":[{"Url":"https://youtu.be/epAFDEJImrU?list=RDqI8IgMyWvz8&t=68",
               "heading":"hh7yy",
                  "video":"https://www.youtube.com/embed/7gwW_JWKLxk"},
                  {"Url":"https://youtu.be/epAFDEJImrU?list=RDqI8IgMyWvz8&t=68",
               "heading":"11 Jan 2019  Listen to O My Lovely Lalana Video Song From Padi Padi Leche Manasu, New Telugu Movie, Starring Sharwanand, Sai Pallavi. Sung by Yazin",
                  "video":"https://www.youtube.com/embed/7gwW_JWKLxk"},
                  {"Url":"https://youtu.be/epAFDEJImrU?list=RDqI8IgMyWvz8&t=68",
               "heading":"hh7yy",
                  "video":"https://www.youtube.com/embed/7gwW_JWKLxk"}
                  ]

}`
let hfg=JSON.parse(hh)
console.log(hfg.g)
let div_rr=" "
for (hh of hfg.g){
	div_rr += `<div>
	<iframe src="${hh.video}" style="controls">${hh.video}</iframe>
	<p><a href="${hh.Url}">${hh.Url}</a></p>
	<h3>${hh.heading}</h3>
	
	<br><br>
	</div>`
}
document.getElementById('ff').innerHTML= div_rr

