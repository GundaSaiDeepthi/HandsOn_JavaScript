//Assignment 1: Daily Temperature Analyzer

const temperatures = [32, 35, 28, 40, 38, 30, 42];

   //1. filter() temperatures above 35
     let result1=temperatures.filter(temperature=>temperature>35)
     console.log(result1)

   //2. map() to convert all temperatures from Celsius → Fahrenheit
     let result2=temperatures.map(temperature=>(temperature*(9/5)+32))
     console.log(result2)

   // 3. reduce() to calculate average temperature
     let result3=temperatures.reduce((accumulator,temperature)=>(accumulator+temperature)/temperatures.length)
     console.log(result3)

   //4. find() first temperature above 40 
     let result4=temperatures.find(temperature=>temperature>40)
     console.log(result4)

    //5. findIndex() of temperature 28
      let result5=temperatures.findIndex(temperature=>temperature===28)
      console.log(result5)