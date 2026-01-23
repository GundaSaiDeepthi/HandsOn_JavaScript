//Assignment on Functions
let totalAmount=0
        
  //1. Add ₹500 to the total
  function addToTotal(totalAmount){
    return totalAmount+500;
}

//2. Add ₹1200 to the total
function addToTotalEx(totalAmount){
    return totalAmount+1200;
}

 //3. Apply a ₹200 discount
function addToTotalD(totalAmount){
    return totalAmount-200;
}

//4. Add 18% GST
function addToTotalGst(totalAmount){
    return totalAmount*18/100;
}

//5. Print the final bill amount

totalAmount=addToTotal(totalAmount)
totalAmount=addToTotalEx(totalAmount)
totalAmount=addToTotalD(totalAmount)
totalAmount=addToTotalGst(totalAmount)
console.log(totalAmount)