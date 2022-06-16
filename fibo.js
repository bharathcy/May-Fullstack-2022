let data =
`{
	
	"x":[
	{
	"heading":"Cricket News",
	"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
	"Date":"16/06/2022",
	"Time":"10:35am"
},

	{
	"heading":"pokemon new series release",
	"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
	"Date":"16/06/2022",
	"Time":"10:35am"

	},
	{
		"heading":"Doreamon new series release",
		"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
		"Date":"16/06/2022",
		"Time":"10:35am"
	
		},

		{
			"heading":"New Home appliances",
			"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
			"Date":"16/06/2022",
			"Time":"10:35am"
		
			},

			{
				"heading":"youtube new features",
				"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
				"Date":"16/06/2022",
				"Time":"10:35am"
			
				},
				{
					"heading":"Tvs and fridges",
					"description":"BCCI annaounced new squad for ireland T-20 series Former West Indies pacer Ian Bishop said Pakistan captain Babar Azam has almost overtaken Virat Kohli as the ultimate uber batter in ODI cricket.Azam is on the road to greatness I dont use the term loosely. It has to be a bigger sample size to bestow greatness on a player added Bishop",
					"Date":"16/06/2022",
					"Time":"10:35am"
				}]
				

}`

let convaerted_JS_OBJECT = JSON.parse(data)

console.log(convaerted_JS_OBJECT.x)

let div_element = ""
for (data of convaerted_JS_OBJECT.x){	
	div_element += `<div>
		
		<h2>${data.heading}</h2>
		<p>${data.description}</p>
		<span> ${data.Date}</span>
		<span>${data.Time}</span>
	
	</div>`

}

document.getElementById("body").innerHTML = div_element
