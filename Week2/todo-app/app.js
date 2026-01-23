 //iii. app.js - Main application
                  // TODO: Import task functions
                  import {addTask,getAllTasks,completeTask} from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  console.log(addTask("Finish HomeWork","medium","2026-01-30"))
                  console.log(addTask("Join meeting","high","2026-01-27"))
                  console.log(addTask("Attend webinar","high","2026-01-20"))
                  
                  // 2. Display all tasks
                  console.log("All Tasks:")
                  console.log(getAllTasks())
                  // 3. Complete a task
                  completeTask()
                  // 4. Display all tasks again
                  console.log("All Tasks:")
                  console.log(getAllTasks())