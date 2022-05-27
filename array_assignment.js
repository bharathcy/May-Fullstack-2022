//Declare an array with more than 5 number of elements and Find the length of your array

let employee=["4002341","Gagan",24,"Infosis","Automation_Engineer",45000,"gagan@infosis.com"];
console.log("lenth of employee:",employee.length)

//Declare an array variable name it Branches and assign initial values ComputerScience, Electronics, Electrical....

let IT_Branches = ["ComputerScience", "Electronics", "Electrical"]


//Print the number of Branches in the array
console.log("Number of Branches:",IT_Branches.length)


//Print the first Branch, middle and last Branch
console.log("1st Branch:",IT_Branches[0])
console.log("2nd Branch:",IT_Branches[1])
console.log("3rd Branch:",IT_Branches[2])

//Print out each Branch
console.log("Branches are:");
for (branch of IT_Branches)
{
	console.log(branch);
}
//Change each Branch name  to uppercase one by one and print them out
console.log("Changing each Branch name  to uppercase")
for(branch of IT_Branches)
{
	console.log(branch.toUpperCase())
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT Branches.
let Branches = ["Facebook","Google", "Microsoft","Apple","IBM","Oracle","Amazon"]

let sentence=`${Branches[0]},${Branches[1]},${Branches[2]},${Branches[3]},${Branches[4]},${Branches[5]} and ${Branches[6]} are big IT Branches`

console.log(sentence)

//Check if a certain Branch exists in the itBranches array. If it exist return the Branch else return a Branch is _not found_
if(IT_Branches.includes("Electrical"))
{
	 console.log("Branch")	
}else{console.log("Branch is not found")}

if(IT_Branches.includes("CIVIL"))
{
	console.log("Branch")	
}
else
{
	console.log("Branch is not found")
}

//Filter out Branches which have more than one 'o' without the filter method
console.log("Branches which have more than one 'o'")
for(brc of Branches)
{
	if(brc.includes('o'))
	{
      let o_index_count= brc.match(/o/g)
	  if(o_index_count.length > 1)
	  {
		  console.log(brc)
	  }
    }
	
}


//Sort the array using _sort()_ method
let student=["Gagan","Shweta","Sahana","Asif","Lavanya","Aishu","Deepa"]
console.log("before sorting :",student)
console.log("after sorting:",student.sort())


//Reverse the array using _reverse()_ method
console.log("before reversing",employee)
console.log("after reversing",employee.reverse())

//Slice out the first 3 Branches from the array
console.log("Slice out the first 3 Branches from the array")
console.log(Branches.slice(0,3))

//Slice out the last 3 Branches from the array
console.log("Slice out the last 3 Branches from the array")
console.log(Branches.slice(-3))

//Slice out the middle IT Branch or Branches from the array
console.log("Slice out the middle IT Branch or Branches from the array")
let middle_index = Math.round(IT_Branches.length/2)
console.log("middle element of IT_Branches:",IT_Branches[middle_index-1])

let mid_index=Math.round(Branches.length/2)
console.log("middle element of Branches Array:",Branches[mid_index-1])


//Remove the first IT Branch from the array
//1st way
let IT_Branches1 = ["ComputerScience", "Electronics", "Electrical"]
IT_Branches1.shift();
console.log("atfer removing the 1st branch from array using shift()",IT_Branches1)
//2nd way
let IT_Branches2 = ["ComputerScience", "Electronics", "Electrical"]
IT_Branches2.splice(0,1)
console.log("removed 1st element using splice()",IT_Branches2)

//Remove the middle IT Branch or Branches from the array

let IT_Branches3 = ["ComputerScience", "Electronics", "Electrical"]
let midle_branch_index = Math.round(IT_Branches3.length/2 - 1)
IT_Branches3.splice(midle_branch_index,1)
console.log("after removing the middle element using splice():",IT_Branches3)


/*=========================================================================================================*/

//Remove the last IT Branch from the array
//1st way
let IT_Branches5 = ["ComputerScience", "Electronics:", "Electrical"]
IT_Branches5.pop()
console.log("Removed last branch from IT Branches using pop():",IT_Branches5)

//2nd way
let IT_Branches6 = ["ComputerScience", "Electronics:", "Electrical"]
IT_Branches6.splice(-1,1)
console.log("Removed last branch from IT Branches using splice():",IT_Branches6)

/*
note:------
we can't able to remove the specifed index eleements by using shift and pop methods
let IT_Branches7 = ["ComputerScience", "Electronics:", "Electrical"]
IT_Branches7.shift(3) or  IT_Branches7.shift(any_index) ===================================> this method won't work,

console.log("Removed last branch from IT Branches using shift(index):",IT_Branches7)*/


//Remove all IT Branches
let IT_Branches7 = ["ComputerScience", "Electronics:", "Electrical"]
IT_Branches7.splice(0,3)
console.log("after removing the all elements",IT_Branches7)

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
/*
import Countries  from "./Countries.js"
let val=Countries();
console.log("Importing from Countries.js file:",val)
*/

/*=========================================================================================*/
//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add
shoppingCart.push('Curd')
shoppingCart.unshift('Oil')
shoppingCart.splice(4,0,'Ghee')

console.log("after adding the items:",shoppingCart)

//remove
const shoppingCart1 = ['Oil', 'Milk', 'Coffee', 'Tea', 'Ghee', 'Honey', 'Curd']
shoppingCart1.pop()
console.log("using pop():",shoppingCart1)
shoppingCart1.shift()
console.log("using shift()",shoppingCart1)
shoppingCart1.splice(2,2)
console.log("using splice:",shoppingCart1)

//adding and removing
const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart2.splice(0,10,'Vegetables','Meat','soap','maggie')
console.log("removing all elements and adding new elements:",shoppingCart2)

shoppingCart2.splice(3,0,'Milk', 'Coffee', 'Tea', 'Honey')
console.log("not removing any elements but adding new elements",shoppingCart2)

//edit
const shoppingCart3 = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart3)
shoppingCart3[3]='Oil'
console.log("after editing:",shoppingCart3)


//   - add 'Meat' in the beginning of your shopping cart if it has not been already added
       
       const shoppingCart5 = ['Milk', 'Coffee', 'Tea', 'Honey']
	   if(!(shoppingCart5.includes('Meat')))
	   {
	      shoppingCart5.unshift('Meat')
		  console.log("added 'Meat' in the beginning of your shopping cart:",shoppingCart5)
	   }
	   
//   - add Sugar at the end of you shopping cart if it has not been already added
       if(!(shoppingCart5.includes('sugar')))
	   {
             shoppingCart5.push('Sugar')
	         console.log("added Sugar at the end of you shopping cart",shoppingCart5)
	   }
//   - remove 'Honey' if you are allergic to honey
       let index=shoppingCart5.indexOf('Honey')
       shoppingCart5.splice(index,1)
	   console.log("after removing the honey",shoppingCart5)
//   - modify Tea to 'Green Tea'
       let index_tea = shoppingCart5.indexOf('Tea');
	   shoppingCart5[index_tea]='Green Tea'
	   console.log("Afermodified with Tea by Green Tea",shoppingCart5)
   
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries=["India","USA","UK","China","PAK","Indonesia"];
if(countries.includes['Ethiopia'])
{
	console.log("ETHIOPIA")
	
}
else
{
	countries.push('Ethiopia')
	console.log("after added country:",countries)
}


//In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let Web_Techs=["HTML and CSS","Programming Languages","Frameworks","Web Servers","Databases","Protocols","Lastly","data Formats"]
if(Web_Techs.includes('Saas'))
{
	console.log("Sass is a CSS preprocess")
}
else{
	Web_Techs.unshift('Saas')
	console.log("added saas:",Web_Techs)
}

//Concatenate the following two variables and store it in a fullStack variable.
//    ```js
//    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//    const backEnd = ['Node','Express', 'MongoDB']
//  
//    console.log(fullStack)
//    ```
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
//const fullStack =[...frontEnd,...backEnd] or
let fullStack=frontEnd.concat(backEnd)
console.log(fullStack)


//3.First remove all the punctuations and change the string to array and count the number of words in the array
//    ```js

//    let text =
//    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//    console.log(words)
//    console.log(words.length)
//    ```

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let text1=text.replace(/[.,]/g, "")

console.log(text1)
let text_array=text1.split(" ");
console.log(text_array)
console.log("Length of Array",text_array.length)

//    ```sh
//    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
//  
//    13
//    ```
