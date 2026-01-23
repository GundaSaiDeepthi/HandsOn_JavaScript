//Assignment-4  E-Commerce Website


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//1.Use filter() to get only inStock products
  let result1=cart.filter(cartObj=>cartObj.inStock===true)
  console.log(result1)

//2.Use map() to create a new array with:  { name, totalPrice }
  let result2=cart.map(cartObj=>{
    return {
        name:cartObj.name,
        totalPrice:cartObj.price*cartObj.quantity
    }
  })
  console.log(result2)

//3.Use reduce() to calculate grand total cart value
  let result3=result2.reduce((accumulator,cartObj)=>accumulator+cartObj.totalPrice,0)
  console.log(result3)

//4.Use find() to get details of "Mouse"
  let result4=cart.find(cartObj=>{
    if(cartObj.name==="Mouse"){
return cartObj;
/*  id:cartObj.id,
    name:cartObj.name,
    price:cartObj.price,
    quantity:cartObj.quantity,
    inStock:cartObj.inStock*/
  
    }
})
  console.log(result4)

//5.Use findIndex() to find the position of "Keyboard"
  let result5=cart.findIndex(cartObj=>cartObj.name==="Keyboard")
  console.log(result5)
