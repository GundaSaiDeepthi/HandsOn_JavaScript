//ASSIGNMENT 5: Bank Transaction Analyzer


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];



   // 1. filter() all credit transactions
     let result1=transactions.filter(transactionObj=>transactionObj.type==="credit")
     console.log(result1)

   // 2. map() to extract only transaction amounts
      let result2=transactions.map(transactionObj=>transactionObj.amount)
      console.log(result2)

   // 3. reduce() to calculate final account balance
      let result3=transactions.reduce((accumulator,transactionObj)=>{
        if(transactionObj.type==="credit"){
            return accumulator+transactionObj.amount
        }
        else{
            return accumulator-transactionObj.amount
        }
      },0)
      console.log(result3)

   // 4. find() the first debit transaction
     let result4=transactions.find(transactionObj=>transactionObj.type==="debit")
     console.log(result4)

  //5. findIndex() of transaction with amount 10000
    let result5=transactions.findIndex(transactionObj=>transactionObj.amount===10000)
    console.log(result5)