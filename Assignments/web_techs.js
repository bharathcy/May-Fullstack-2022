let webTech_arrays = ["SEOBrokers", "ScriptableSolutions", "Digiboost", "FreshCreative", "RevBuilders", "WebSolutionsMD" ]
let Companies = prompt("Enter the Company Name :") ;

if (Companies == webTech_arrays && webTech_arrays =='Sass') {
    console.log ("Sass is a CSS preprocess")
}

else {
     webTech_arrays.unshift("Sass") == Companies
     console.log ("Since Sass was not in webTechs list, 'Sass' is added to the list ==>" ,webTech_arrays)
}
