'1>Declare an array with more than 5 number of elements'
/*let list=['mango','banana','tomato',50, '20', 'raju']
console.log(list)*/
const c = [];
c[0]= "Saab"
c[1]= "Volvo"
c[2]= "BMW"
c[3]= 80
console.log(c)
'2>Find the length of your array'
let list2=['mango','banana','tomato',50, '20', 'raju']
console.log(list2.length)
'3>Declare an array variable name it Branches and assign initial values ComputerScience, Electronics, Electrical....'
var Branches=['ComputerScience','Electronics','Electrical', 'civil']
console.log(Branches)
console.log(Branches[0].toUpperCase())
console.log(Branches[2].toUpperCase())
console.log(Branches[3].toUpperCase())

'4>Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT Branches.'
sentence=['Facebook', 'Google','Microsoft','Apple','IBM','IBM,Oracle and Amazon are big IT Branches.']
console.log(sentence.join(" "))
'5>Check if a certain Branch exists in the itBranches array. If it exist return the Branch else return a Branch is _not found_'
 var itBranches=['ComputerScience', 'infomationscence', 'BCA','MCA']
 let _Branches=['ComputerScience','Electronics','Electrical', 'civil']
if(itBranches in _Branches ){
	console.log(_Branches)
}
else{
	console.log("_not found_")
}

'6>Filter out Branches which have more than one ''o' 'without the filter method'
console.log("Filter out Branches which have more than one ''o' 'without the filter method'")
for (x of Branches) {
    if (x.includes('o')) {
        let o_index_count=x.mactch(/o/g)
        if(o_index_count.length>1){
            console.log(x)
        }
    }
}


'5>Sort the array using _sort()_ method'
console.log(sentence.sort())
console.log(sentence.reverse())

'Slice out the first 3 Branches from the array'
console.log(_Branches.slice(0,3))
'Slice out the last 3 Branches from the array'
_Branches3=['ComputerScience','Electronics','Electrical', 'civil','gethub', 'Bootstrap']
console.log(_Branches3.slice(2,5))
'Slice out the middle IT Branch or Branches from the array'
itBranches2=['ComputerScience', 'infomationscence', 'BCA','MCA']
console.log(itBranches2.slice(1))

'Remove the first IT Branch from the array'
itBranches4=['ComputerScience', 'infomationscence', 'BCA','MCA']
console.log(itBranches4.shift())
'Remove the middle IT Branch or Branches from the array'
fruits = ["ComputerScience", "infomationscence", "BCA", "MCA"];
console.log(fruits.splice(1))
'Remove the last IT Branch from the array'
fr = ["ComputerScience", "infomationscence", "BCA", "MCA"];
console.log(fr.pop())
'Remove all IT Branches'
k=['ComputerScience', 'infomationscence', 'BCA','MCA']
console.log(k.splice(0,4))
console.log(k)


//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//First remove all the punctuations and change the string to array and count the number of words in the array

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```
