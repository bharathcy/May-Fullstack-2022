

let student1= new Array()
let student2= []

let student ="fullstack"
    student3= student.split('')

    let student4= ["cooker","Doctor", "swimmer", "lawyer", "cricketer"]

    let student5= new Array(5)
    let student6= new Array(5).fill(3)

console.log("student1 ==> ", student1)
console.log("student2 ==> ", student2)
console.log("student3 ==> ", student3)
console.log("student4 ==> ", student4)
console.log("student5 ==> ", student5)
console.log("student6 ==> ", student6)

console.log("student4 first element ==>",student4[0])
console.log("student4 second element==>", student4[1] )
student4[1]="Engineer"
console.log("student4 second element ==>", student4[1])
console.log("student4 array length ==>", student4[3].length)
// search operations//
console.log("student4 includes swimmer==>",student4.includes("swimmer"))
//check whether the data is array or not//
console.log("student4 is array ==>", Array.isArray(student4))
console.log("student is array ==>", Array.isArray(student))

//convert array to string method//
console.log("student4 converting array to string ==>", student4.toString())

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)

    // shopping cart
    console.log("add meat",shoppingCart.unshift('meat'));
    console.log(shoppingCart)

      // add 'sugar' shopping cart
      console.log("add sugar",shoppingCart.push('sugar'));
      console.log(shoppingCart)

      // remove 'Honey' if you are allergic to honey
      console.log("remove honey",shoppingCart.splice(2,1));
      console.log(shoppingCart)

      //  modify Tea to 'Green Tea'
      console.log("modify tea to green tea",shoppingCart.splice("3","1","Green Tea"));
      console.log(shoppingCart)
