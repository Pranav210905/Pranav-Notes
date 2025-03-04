function sayHi() { 
    console.log("Hi, this is a predefined function!"); 
  } 
   
  function greet(name, callback) { 
    console.log("Hello, " + name + "!"); 
    callback(); 
  } 
  
greet("Rahul", sayHi);