//ASSIGNMENT 3: Employee Payroll Processor

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


    //1. filter() employees from IT department
      let result1=employees.filter(employeeObj=>employeeObj.department=="IT")
      console.log(result1)

    //2. map() to add: netSalary = salary + 10% bonus
      let result2=employees.map(employeeObj=>{
      let netSalary
      employeeObj.netSalary=employeeObj.salary+10/100
      return employeeObj
      })
      console.log(result2)

    //3. reduce() to calculate total salary payout
      let result3=employees.reduce((accumulator,employeeObj)=>accumulator+employeeObj.salary,0)
      console.log(result3)

    //4. find() employee with salary 30000
      let result4=employees.find(employeeObj=>employeeObj.salary===30000)
      console.log(result4)

    //5. findIndex() of employee "Neha"
      let result5=employees.findIndex(employeeObj=>employeeObj.name==='Neha')
      console.log(result5)
