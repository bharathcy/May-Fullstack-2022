let data_store =
		
	`{ "x": [

		  { "Url" : "https://www.callofduty.com",
		 	"Heading" : "Call of Duty® | Best-Selling Video Game Franchise",
		 	"Discription" : "Experience Call of Duty: the world's best-selling video game franchise. Discover the latest updates to this first-person shooter series all in one place, "
		  },

		  { "Url" : " https://play.google.com ",
		 	"Heading" : "Call of Duty Mobile Season 5 – Apps on Google Play",
		 	"Discription" : "The CALL OF DUTY® you know and love now on your mobile device. With classic multiplayer modes such as Team Deathmatch, Domination,"
		  },

		  { "Url" : "https://www.instagram.com",
		 	"Heading" : "Call of Duty (@callofduty) • Instagram photos and videos",
		 	"Discription" : "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II."
		 }] 

	}`


	let data_store_converted = JSON.parse(data_store)	
	console.log (data_store_converted.x)

	let div_content = ""

	for (data_store of data_store_converted.x){
		 	div_content += `<div> 

		 					<p> <a href="https://www.callofduty.com" style="color:black;text-decoration:none;">${data_store.Url} </a>
		 					<h4 style="color:blue;"> ${data_store.Heading}</h4>
		 					<p> ${data_store.Discription}</p>

		 				   </div>
		 				 `
	}

	document.getElementById('body').innerHTML = div_content


let data_video =
		
	`{ "x": [

		  { "Url" : "Official Reveal Trailer | Call of Duty: Modern Warfare",
		 	"Heading" : "YouTube · Call of Duty",
		 	"video" : "https://www.youtube.com/embed/bH1lHCirCGI",
		 	"day" : "30-May-2019"
		  },

		  { "Url" : " Reveal Trailer | Call of Duty: Black Ops Cold War",
		 	"Heading" : "YouTube · Call of Duty",
		 	"video" : "https://www.youtube.com/embed/aTS9n_m7TW0",
		 	"day" : "30-Aug-2020"
		  },

		  { "Url" : "Official “Ultimate Team” Teaser - Call of Duty: Modern Warfare II",
		  	"Heading" : "YouTube · Call of Duty",
		 	"video" : "https://www.youtube.com/embed/ffClwz-bIxY" ,
		 	"day" : "5 days ago"
		 }] 

	}`

 let data_video_converted = JSON.parse(data_video)	
	console.log (data_video_converted.x)

	let div_content1 = ""
	

	for (data_video of data_video_converted.x){
		 	div_content1 += `<div> 

		 					<iframe style="border-radius:10px;" width="200" height="100" src="${data_video.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		 					<div style="display:inline-block;margin-left:20px;">

		 							<h6 style="margin-bottom:20px;"> <a href="https://www.callofduty.com" >${data_video.Url} </a> </h6>
		 							<p > ${data_video.Heading}</p>
		 							<p > ${data_video.day}</p>

		 					  </div>
							<hr>
		 				 `
}

	
	// let div_content2 = ""

	// for (data_video of data_video_converted.x){

	// 	 	div_content2 += ` <div>

	// 	 							<h6> <a href="data_store[Url]" >${data_video.Url} </a> </h6>
	// 	 							<p > ${data_video.Heading}</p>
	// 	 							<p> ${data_video.day}</p>

	// 	 							<hr>



	// 	 					  </div>
	// 	 					`
	// }

	document.getElementById('body1').innerHTML = div_content1

	// document.getElementById('body2').innerHTML = div_content2




