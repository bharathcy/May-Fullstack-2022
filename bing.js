let data_store =
	
		`{ "x": [

			{ "Url" : "https://imdb.com ",
			   "Heading" : "IMDb: Ratings, Reviews, and Where to Watch the Best Movies ...",
			   "Discription" : "IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. "
			},
  
			{ "Url" : "https://www.rottentomatoes.com",
			   "Heading" : "Rotten Tomatoes: Movies | TV Shows | Movie Trailers ...",
			   "Discription" : "Rotten Tomatoes, home of the Tomatometer, is the most trusted measurement of quality for Movies & TV. The definitive site for Reviews, Trailers, Showtimes, ...,"
			},
  
			{ "Url" : "https://www.netflix.com",
			   "Heading" : "Netflix - Watch TV Shows Online, Watch Movies Online",
			   "Discription" : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of ..."
		   }] 
  
	  }`


	let data_store_converted = JSON.parse(data_store)	
	console.log (data_store_converted.x)

	let div_content = ""

	for (data_store of data_store_converted.x){
		 	div_content += `<div> 

		 					<p> <a href="https://www.dccomics.com/" style="color:black;text-decoration:none;">${data_store.Url} </a>
		 					<h4 style="color:blue;"> ${data_store.Heading}</h4>
		 					<p> ${data_store.Discription}</p>
		 				   </div>
		 				 `
	}

	document.getElementById('body').innerHTML = div_content


let data_video =
		
`{ "x": [

	{ "Url" : "Black Adam | Official Trailer ",
	   "Heading" : "DC YouTube · DC",
	   "video" : "https://www.youtube.com/embed/X0tOpBuYasI",
	   "day" : "09-May-2019"
	},

	{ "Url" : " VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi ...",
	   "Heading" : "YouTube · Sony Music South",
	   "video" : "https://www.youtube.com/embed/OKBMCL-frPU",
	   "day" : "3 weeks ago"
	},

	{ "Url" : "Marvel Studios Thor: Love and Thunder | Official Trailer",
		"Heading": "YouTube · Marvel Entertainment",
	   "video" : "https://www.youtube.com/embed/Go8nTmfrQd8" ,
	   "day" : "2 weeks ago"
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




