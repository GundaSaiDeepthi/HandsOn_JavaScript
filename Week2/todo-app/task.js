//Task operations
                    // TODO: Import validator functions
                     import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    const tasks = [];
                    let idCount=0
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      let titleValidate=validateTitle(title)
                      if(titleValidate!==true)
                        return titleValidate
                       let titlePriority=validatePriority(priority)
                      if(titlePriority!==true)
                        return titlePriority
                       let titleDate=validateDueDate(dueDate)
                      if(titleDate!==true)
                        return titleDate
                      // If valid, add to tasks array
                      let task={
                        id:idCount++,
                        title,
                        priority,
                        dueDate,
                        completed:false
                      }
                      tasks.push(task)
                      // Return success/error message
                      return "Task Added Successfully";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      let task=tasks.find(taskObj=>taskObj.id===taskId)
                      if(!task){
                        return "Task Not Found";
                      }
                      if(task.completed){
                        return "Task already completed"
                      }
                      task.completed=true
                      return "Task\""+task.title+"\"marked as completed";
                    }
                    export {addTask,getAllTasks,completeTask}