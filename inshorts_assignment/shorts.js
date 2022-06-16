let hmg =
`{
	
	"x":[
	{"url":"https://images.hindustantimes.com",
	"heading":"Agnipath protests spread to MP's Gwalior, railway station ransacked",
	"description":"Earlier in the day, protests against India's new recruitment model ‘Agnipath’ turned violent in Bihar's Chhapra where protestors set a train on fire.",
	"video":"https://www.youtube.com/embed/U-ZOvBESxP4?start=3"
},
	{"url":"https://www.hindustantimes.com/india-news/dont-take-agnipareeksha-of-unemployed-youth-rahul-slams-centre-on-agnipath-101655368666851.html",
	"heading":"Rahul, Priyanka lead 'Satygraha' march to ED office amid high drama| In pics",
	"description":"27-May-2022 — JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
	"video":"https://www.youtube.com/watch?v=aFQHskH5nwo"
	},
	{
	"url":"https://www.hindustantimes.com/cities/in-uttar-pradesh-325-arrested-over-violence-after-friday-protests-101655086681934.html",
	"heading":"In Uttar Pradesh, 325 arrested over violence after Friday protests",
	"description":"At least 92 people have been arrested from Prayagraj, 80 from Saharanpur, 51 from Hathras, 41 from Ambedkar Nagar and 35 from Moradabad for their alleged involvement in the violence. At least 16 people were nabbed in Firozabad, six in Aligarh and four in Jalaun, UP's ADG Law & Order Prashant Kumar said.",
	"video":"https://www.youtube.com/watch?v=rw_8G829aug&list=RDrw_8G829aug&start_radio=1"
	},
	{"url":"https://www.hindustantimes.com/videos/pok-minister-protests-bitter-enmity-gilgit-baltistan-struggling-too-101655139612898.html",
	"heading":"PoK Minister protests 'bitter enmity', Gilgit-Baltistan struggling too",
	"description":"Shehbaz Sharif Govt is imposing harsh budget cuts in illegally occupied areas (PoK & Gilgit-Baltistan). Protesting unfair outlook, cabinet & parliamentary secretaries in PoK refused to table 2022-23 budget. Leaders flagged the 'negative impact' - budgetary cuts imply far fewer resources to uplift people in the region. PoK minister for local govt & rural development slammed the Pakistani Govt for displaying 'bitter enmity'. Unfazed by consequences, the govt has slashed PoK(s) development budget by 5.2 billion Pakistani Rupees. Gilgit-Baltistan is suffering too, social protection, education, health, water supply & sanitation key concerns.",
	"video":"https://www.youtube.com/watch?v=aFQHskH5nwo"
	}
	]
}`

let convaerted_JS_OBJECT = JSON .parse(hmg)

console.log(convaerted_JS_OBJECT.x)

let div_element = ""
for (hmg of convaerted_JS_OBJECT.x){
	div_element += `<div style="box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);">
	<ul>
		<p><a href="${hmg.url}">${hmg.url}</a></p>
		<h4 style="color:blue;">${hmg.heading}</h4>
		<p style="color:gray;">${hmg.description}</p>
	</ul>
		<br>
	</div><br>`
}
document.getElementById("demo").innerHTML = div_element;