let neo =
	
		`{ "IR": [

			{  "Heading" : "UAE bans export of Indian wheat till September",
                "url"    :"https://www.inshorts.com/en/news/uae-bans-export-of-indian-wheat-till-september-1655281416824",
			   "Discription" : "The UAE has imposed a moratorium on the export and re-export of wheat and wheat flour from India for four months starting from May 13. The UAE said this decision comes in view of international developments that have affected trade flows and in appreciation of the strategic relations after India's approval to export wheat to the UAE for domestic consumption",
               "pic" : "https://indiagardening.com/wp-content/uploads/2020/01/3Benefits-of-wheat.jpg" 

            },   

			{ "Heading" : "What is the I2U2 group that comprises India US",
			  "Discription" : "US has announced a new group named I2U2, which comprises India, Israel, US and UAE. India is a massive consumer market. It is a massive producer of high-tech and highly sought-after goods as well. So, there are a number of areas where these countries can work together, whether its technology, trade, climate...and potentially even security as well, US said",
              "pic" : "https://images.hindustantimes.com/img/2021/09/24/1600x900/modi_biden2_1632501943502_1632501960942.jpg" 

			},


			{  "Heading" :"Will keep backing Russia on sovereignty: China's Xi tells Putin",
			   "Discription" :"Chinese President told his Russian counterpart Vladimir Putin during a phone conversation on Wednesday that Beijing will keep backing Moscow on sovereignty and security issues. Xi reportedly praised the good momentum of development in bilateral ties. Notably, Russia and China opened a new cross-border bridge on June 10 to boost trade amid Western sanctions against Russia for Ukraine war",
               "pic" : "https://i.guim.co.uk/img/media/f0341b2ef8ebeb5ed903bf31b0db39878553f2d8/0_146_3675_2205/master/3675.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=3ec2832e1ac8ecf54f04d7452f9a87c4"

		   }] 
  
	  }`


      let neo_converted = JSON.parse(neo)	
      console.log(neo_converted.IR)

      let div_content = ""
      
	for (neo of neo_converted.IR){
        div_content += 
        `<div class = "border shadow mb-3 p-2" style="width:100%;height:200px;"> 
        <img class="me-3" src ="${neo.pic}" width ="250px";height="230px"; style = "float:left;" >
        <ul style = "float:left;list-style-type:none; width:800px; height:200px">
        <li><a href=${neo.url} style="text-decoration:none;color:black;font-size:25px">${neo.Heading}</a></li>
        <li><p>${neo.Discription}</p></li>
        </ul>
       </div>
     `
    }
document.getElementById('write').innerHTML = div_content

