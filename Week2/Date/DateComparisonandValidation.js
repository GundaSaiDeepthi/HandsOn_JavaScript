//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)


 //Given:
      let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
  
//1.Check if:
    //  * Today is before deadline → "Enrollment Open"
    if(Date.now()<enrollmentDeadline){
        console.log("Enrollment Open")
    }
     // * Today is after deadline → "Enrollment Closed"
     if(Date.now()>enrollmentDeadline){
        console.log("Enrollment Closed")
     }

 // 2. Validate user input date:
      //* Input: "2026-02-30"
      let input="2026-02-30"
      let[year,month,day]=input.split("-").map(Number)
      //* Detect whether the date is valid or invalid
      let date=new Date(year,month-1,day)
      let isValid=date.getFullYear()===year &&
      date.getMonth()===month-1 &&
      date.getDate()===day;
      if(isValid){
        console.log("Valid Date")

      }
      else{
        console.log("Invalid Date")
      }
