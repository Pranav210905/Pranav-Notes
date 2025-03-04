function performTask(taskName, callback) { 
    console.log("Performing task: " + taskName); 
    callback(); 
  } 
   
  performTask("Coding", () => { 
    console.log("Task completed!"); 
  });