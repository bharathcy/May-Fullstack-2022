//Declare an array with more than 5 number of elements//

let brands_array=["addidas","nike","puma","reebok","gucci",];
console.log(brands_array)

//Find the length of your array

console.log(brands_array.length);

//Declare an array variable name it Branches and assign initial values ComputerScience, Electronics, Electrical....
let Branches=["civil","electrical","computer_science","mechanical"]
console.log(Branches)
let Branches1=[]
let Courses=["civil","electrical","computer_science",]

//Print the number of Branches in the array
console.log(Branches.length)

//Print the first Branch, middle and last Branch
let Branch1=Branches[0]
let Branch2=Branches[1]
let Branch3=Branches[2]

console.log ("first Branch==>'='",Branch1)
console.log ("second Branch==>'=' ",Branch2)
console.log ("third Branch==>'=' ",Branch3)

//Print out each Branch
console.log (Branches[0])
console.log (Branches[1])
console.log (Branches[2])

//Change each Branch name  to uppercase one by one and print them out
console.log (Branch1.toUpperCase())
console.log (Branch2.toUpperCase())
console.log (Branch3.toUpperCase())
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT Branches.
const array1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM",];
const array2 = ["Oracle and Amazon are big IT Branches."];
const array3 = array1.concat(array2);

console.log(array3);

        //Reverse the array using _reverse()_ method
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log(IT.reverse());

        //Slice out the first 3 Branches from the array
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("slice out first 3 branches", IT.slice(0, 3));

        // Slice out the last 3 Branches from the array
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("slice out last 3 branches", IT.slice(4, 7));

        // Slice out the middle IT Branch or Branches from the array
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("middle", IT.slice(3, 4));

        //Remove the first IT Branch from the array
        var IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("remove first IT branch", IT.shift());
        console.log(IT);

        // Remove the middle IT Branch or Branches from the array
        var IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("remove middle IT branch", IT.splice(4,1));
        console.log(IT);

        // Remove the last IT Branch from the array
        var IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("remove last IT branch", IT.pop());
        console.log(IT);

        // Remove all IT Branches
        var IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("remove all IT branch", IT.splice(0,7));
        console.log(IT);

