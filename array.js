// Declare an array with more than 5 number of elements
let Team=["rcb","mi","csk","dc","gt"]
// Find the length of your array
console.log(Team.length)

// Print the first Branch, middle and last Branch
let branches=['computer science','mechanical','electronics','civil','aeronatical']
console.log(branches)
console.log(branches[0])
console.log(branches[branches.length-1])

console.log(branches[(branches.length-1)/2])

 // Change each Branch name  to uppercase one by one and print them out
        console.log(branches[0].toUpperCase());
        console.log(branches[1].toUpperCase());
        console.log(branches[2].toUpperCase());
        console.log(branches[3].toUpperCase());
        console.log(branches[4].toUpperCase());

// Print the array like as a sentence:
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("The", IT.toString(), "are IT company.")

// Sort the array using _sort()_ method
        console.log(branches);
        console.log("sort the array", branches.sort());
		
		//Reverse the array using _reverse()_ method
        var IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log(IT.reverse());
	
   //Slice out the first 3 Branches from the array
       let company = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("slice out first 3 branches", company.slice(0, 3));

// Slice out the last 3 Branches from the array
        let fruits = ['apple', 'bannana', 'mango', 'grape', 'kiwi', 'orange', 'butterfruit']
        console.log("slice out last 3 branches", fruits.slice(4, 7));

// Slice out the middle  Branch or Branches from the array
        let fruit = ['apple', 'bannana', 'mango', 'grape', 'kiwi', 'orange', 'butterfruit']
        console.log("middle", fruit.slice(3, 4))
		
		//Remove the first  Branch from the array
        let fruitshub = ['apple', 'bannana', 'mango', 'grape', 'kiwi', 'orange', 'butterfruit']
        console.log("remove first fruit branch", fruitshub.shift())
        console.log(fruitshub);

// Remove the last IT Branch from the array
        IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("remove last IT branch", IT.pop());
        console.log(IT);
		
		// Remove all IT Branches
         IT = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        console.log("removed all IT branch", IT.splice(0,7));
        console.log(IT);
		
// In the following shopping cart add, remove, edit items
		const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
		
	    console.log(shoppingCart.unshift('Meat'));
		console.log(shoppingCart)
		
	  console.log(shoppingCart.push('Sugar'));
      console.log(shoppingCart)
	  
	  console.log(shoppingCart.splice(4,1));
      console.log(shoppingCart)
	  
	  console.log(shoppingCart.splice("3","1","Black Coffee"));
      console.log(shoppingCart)