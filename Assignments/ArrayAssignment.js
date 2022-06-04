// 1. Declare an array with more than 5 number of elements

    let Games_Array = ["Cricket","Football","Volleyball","Throwball","Badminton","Tennis",];
    console.log (Games_Array)

// 2. Find the length of your array

    console.log (Games_Array.length)

//3. Declare an array variable name it Branches and assign initial values ComputerScience, Electronics, Electrical....

    let Branches = ["ComputerScience", "Electronics", 'Electrical']
    console.log (Branches)

    let Branches1 = []
    let Courses = ["ComputerScience", "Electronics", "Electrical"]
    Branches1.push(Courses)
    console.log (Branches1)

//4. Print the number of Branches in the array
    console.log (Branches.length)

// Print the first Branch, middle and last Branch
    let Branch1 = Branches[0]
    let Branch2 = Branches[1]
    let Branch3 = Branches[2]

    console.log ("First Branch ==>" + " " , Branch1)
    console.log ("Second Branch ==>" + " " , Branch2)
    console.log ("Third Branch ==>" + " " , Branch3)

// 5. Print out each Branch
     console.log (Branches[0])
     console.log (Branches[1])
     console.log (Branches[2])

// 6. Change each Branch name  to uppercase one by one and print them out

    console.log (Branch1.toUpperCase())
    console.log (Branch2.toUpperCase())
    console.log (Branch3.toUpperCase())

//7. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT Branches.
     let Company_Array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

     console.log ( "Big IT Branches are" + "", Company_Array.toString())

//8. Check if a certain Branch exists in the itBranches array. If it exist return the Branch else return a Branch is _not found_

   /* let ItBranches = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    let Branch = prompt("Enter the Branch Name :")

    if (Branch == "Facebook" ){
        console.log ("Facebook branch is exist in IT Branches")
    } 
    else if (Branch == "Google" ){
        console.log ("Google branch is exist in IT Branches")
    } 
    else if (Branch == "Microsoft" ){
        console.log ("Microsoft branch is exist in IT Branches")
    }
    else if (Branch == "Apple" ){
        console.log ("Apple branch is exist in IT Branches")
    }
    else if (Branch == "Oracle" ){
        console.log ("Oracle branch is exist in IT Branches")
    }
    else if (Branch == "Amazon" ){
        console.log ("Amazon branch is exist in IT Branches")
    }
    else {
        console.log ("Entered Branch is not found !!!")
    }  */

//9. Filter out Branches which have more than one 'o' without the filter method
    // let Company_Array1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    // let Filter = Company_Array1.toString()
     
    // console.log (Filter.match("o"))


//10. Sort the array using _sort()_ method
    let ItBranches1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    console.log ("Sorted Elements of ItBranches ==> " , ItBranches1.sort().join(' '))
    
//11. Reverse the array using _reverse()_ method

    console.log ("Reversed Elements of ItBranches ==> ", ItBranches1.reverse())

//12. Slice out the first 3 Branches from the array

    console.log ("Sliced First 3 Branches ==> " , ItBranches1.slice(0,3))

//13. Slice out the last 3 Branches from the array 
    let ItBranches2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    console.log ("Sliced Last 3 Branches ==> " , ItBranches2.slice(4,7))

//14. Slice out the middle IT Branch or Branches from the array
    let ItBranches3 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    console.log ("Sliced Middle 3 Branches ==> " , ItBranches3.slice(3,4))
    
//15. Remove the first IT Branch from the array
    let ItBranches4 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    console.log ("Total ItBranches available ==> " ,ItBranches4)
    console.log ("Removed First IT Branch from Array ==> " , ItBranches4.shift())

//16. Remove the middle IT Branch or Branches from the array 
    let ItBranches5 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]  

    console.log ("Removed Middle IT Branch from Array ==> " , ItBranches5.splice(3,1))

//17. Remove the last IT Branch from the array
    let ItBranches6 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"] 

    console.log ("Removed Last IT Branch from the Array ==> " , ItBranches6.pop())

//18. Remove all IT Branches
    let ItBranches7 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    console.log ("Removed all IT branches from the Array ==>" , ItBranches7.splice(0,7))
    console.log ("Hence Elements in ItBranches7 array are ==> " , ItBranches7)


// Shopping cart add, remove, edit items

    //add 'Meat' in the beginning of your shopping cart
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift("Meat")
    console.log ("Added 'Meat' in the beginning ==>",shoppingCart) 

    //add Sugar at the end of you shopping cart
    const shoppingCart1 = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart1.push("Sugar")
    console.log ("Added Sugar at the end of you shopping cart ==>",shoppingCart1) 

    //remove 'Honey' if you are allergic to honey
    const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart2.pop("Honey")
    console.log ("Removed 'Honey' because Im allergic ==>",shoppingCart2) 

    //modify Tea to 'Green Tea'
    const shoppingCart3 = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart3[2] = "Green Tea"
    console.log ("Modified Tea to 'Green Tea' ==>",shoppingCart3) 



// First remove all the punctuations and change the string to array and count the number of words in the array

    let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

    let words= text.split(' ')
    

    console.log("Changed from String to Array ==>",words)
    console.log ("Number of Words present in Array ==>" , words.length)

  













