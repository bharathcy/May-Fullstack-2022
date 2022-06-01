const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)

    // add 'Meat' in the beginning of your shopping cart
    console.log("add meat",shoppingCart.unshift('meat'));
    console.log(shoppingCart)

      // add 'sugar' in the end of your shopping cart
      console.log("add sugar",shoppingCart.push('sugar'));
      console.log(shoppingCart)

      // remove 'Honey' if you are allergic to honey
      console.log("remove honey",shoppingCart.splice(4,1));
      console.log(shoppingCart)

      //  modify Tea to 'Green Tea'
      console.log("modify tea to green tea",shoppingCart.splice("3","1","Green Tea"));
      console.log(shoppingCart)
