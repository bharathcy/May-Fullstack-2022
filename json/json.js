let page =
`{
    "x":[
        {"url":" https://www.youtube.com › watch",
         "heading":"What is JSON ? - YouTube",
         "description":"What is JSON ? JavaScript Object Notation Learn Spring Boot ...",
         "source":"YouTube · Telusko · 26-Jun-2017"
        },
        {"url":" https://www.youtube.com › watch",
        "heading":"JSON Tutorial For Beginners - Full Course - YouTube",
        "description":"This video on JSON tutorial for beginners will help you learn how to work with JSON formatted data, output content, loop JSON",
        "source":"YouTube · TechCode · 29-Jul-2019"
       },
       {"url":" https://www.youtube.com › watch",
       "heading":"JSON Crash Course - YouTube",
       "description":"In this video we will talk about JSON, JavaScript object literals and AJAX. Ill show you how to create JSON objects and array",
       "source":"YouTube · Traversy Media · 05-Apr-2017"
      },
      {"url":" https://www.youtube.com › watch",
      "heading":"Learn JSON - Full Crash Course for Beginners - YouTube",
      "description":"JSON (JavaScript Object Notation) is the most popular data representation format, and is one of the most important, and",
      "source":"YouTube · freeCodeCamp.org · 03-Dec-2018"
     },
     {"url":" https://www.youtube.com › watch",
     "heading":"What is JSON? | JSON Tutorial For Beginners | Edureka",
     "description":"This JSON tutorial covers the following topics: 1:21 What Is JSON? ... 17:50 Convert JSON text to JS Object Subscribe to",
     "source":"ouTube · edureka! · 27-Jun-2019"
    },
    {"url":" https://www.youtube.com › watch",
    "heading":"JSON Tutorial in Hindi - YouTube",
    "description":"Learn json in one video in Hindi: In this video, we will see how to write effective json. We will discuss rules and some of the",
    "source":"YouTube · CodeWithHarry · 28-Jun-2021"
   },
   {"url":" https://www.youtube.com › watch",
   "heading":"JSON Tutorial Part-1 | Introduction | Uses of JSON |Data Types",
   "description":"1) Uses of JSON 2) Characteristics of JSON 3) Data Types in JSON 5) JSON ... Testing Blog:",
   "source":"YouTube · SDET- QA Automation Techie · 03-Jan-2020"
  }
 ]
}`

let object = JSON.parse(page)

let content = "";
for(page of object.x){
    content += `<div>
                <p>${page.url}</p>
                <h4><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjnp82si534AhVmlNgFHQ0IDaMQtwJ6BAgEEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJuFdz8f-cT4&usg=AOvVaw3k-5zgRJamCaFeaILi09TP">${page.heading}</a></h4>
                <iframe width="300" src="https://www.youtube.com/embed/JuFdz8f-cT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>${page.description}</p>
                <small>${page.source}</small><hr>
                
                </div>`
}

document.getElementById("demo").innerHTML = content;
