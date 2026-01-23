//HANDS-ON 3: Enrollment Eligibility Checker

    let hasPaid = true;
    let hasCompletedBasics = false;


   //1. If both conditions are true → "Enroll Now"
   //2. Otherwise → "Complete Requirements"
   
   //4. Store result in enrollMessage
   let enrollMessage

   //3. Use ternary operator
   enrollMessage=hasPaid && hasCompletedBasics ? "Enroll Now" : "Complete Requirements"

   //5. Print message
   console.log(enrollMessage)