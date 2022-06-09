
let data =
`{
	
	"x":[
	{"url":"https://www.youtube.com/embed/a7movncpOQc?autoplay=1&hd=1&rel=0&autohide=1&modestbranding=1&iv_load_policy=3",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	},
	{"url":"https://www.youtube.com/embed/Lc-vINJmhNk",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	},
	{
	"url":"https://www.youtube.com/embed/KORZf5JL1hU",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	},{
	"url":"https://www.youtube.com/embed/nc5Lj90BzSQ",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	}]
}`

let convaerted_JS_OBJECT = JSON.parse(data)

console.log(convaerted_JS_OBJECT.x)

let div_element = ""
for (data of convaerted_JS_OBJECT.x){	
	div_element += `<div>
<p><iframe width="560" height="315" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
		<h4>${data.heading}</h4>
		<p>${data.description}</p>
	</div>`

}

document.getElementById("body").innerHTML = div_element







