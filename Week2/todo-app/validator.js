// Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                        if(title.length===0){
                            return "Title is empty"
                        }
                        if(title.length<3){
                            return "Title is less than 3 characters"
                        }
                        return true;
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                        if(priority==="low" || priority==="medium"|| priority==="high")
                          return true;
                        return "Priority must be low,medium or high"
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                        let date1=new Date(date)
                        if(Date.now()>=date1)
                          return "Date should be future date"
                        return true
                      }
   export {validateTitle,validatePriority,validateDueDate}