//declare an array with more than 5 number elements//
let something= ["rohith","virat","jadeja",100,400,150.5,400]
console.log("elements ==>", something)

//declare an array length//
console.log(" array length ==>", something.length)
console.log("array length of jadeja element ==>" ,something[2].length)
console.log("array indexof 400 ==>",something.indexOf(400))
console.log("array length of last index ==>", something.lastIndexOf(400))

//array variable name and its branches//
let itBranches=["computerscience", "Electronics", "Electrical"]
console.log("array of first element ==>", itBranches[0])
console.log("array of second element ==>", itBranches[1])
console.log("array of third element ==>", itBranches[2])
//converting them to upper case//
console.log("array of first upper case ==>", itBranches[0].toUpperCase())
console.log("array of second upper case ==>", itBranches[1].toUpperCase())
console.log("array of third upper case ==>", itBranches[2].toUpperCase())

//print the array like a sentence//

let sentence=["Facebook", "Google", "Microsoft", "Apple", "Ibm", "oracle", "and" ,"amazon" , "are", "big", "IT", "Branches."]
console.log("print array like as a sentence==>", sentence.join(" "))
console.log(sentence.indexOf("o"))
console.log(sentence.sort())
console.log(sentence.reverse())
//check branch exists//

 let branch= ["facebook","google","apple"]
 let branches
 if (branch="apple")
 {
   branches="branch_found"
 }
 else{
     branches="branch-not_found"
 }
console.log(branches)

//slice//
let b=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]
//first 3 branches
console.log("first 3-branches==.",b.slice(0,3))
//middle 3 branches
console.log("middle-3==>",b.slice(2,5))

//last 3 branches
let p=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]
console.log("last-3==>",p.slice(4,7))

//splice//
//1st it branch//
let q=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]
console.log("1st==>",q.splice(0,1))
//last it branch//
let t=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]
console.log("last==>",t.splice(6))


let r=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]

console.log("middle==>",r.splice(3,1))


let z=["computerscience", "Electronics", "Electrical","CSE","Aero","Mechanical","civil"]
console.log(z.splice(0,0))


