const person = { 
    firstName: "Rahul", 
    lastName: "Attuluri", 
    greet: function () { 
      return `Hello, ${this.firstName} ${this.lastName}!`; 
    }, 
  }; 
   
  console.log(person.greet()); 