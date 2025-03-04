function greet(name, callback) { 
    console.log("Hello, " + name + "!"); 
    callback(); 
  } 
   
  greet("Rahul", function() { 
    console.log("This is a callback function."); 
  });