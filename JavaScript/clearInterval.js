let count = 0; 
let intervalId = setInterval(() => { 
  console.log("Count: " + count); 
  count++; 
 
  if (count > 5) { 
    clearInterval(intervalId); 
    console.log("Interval cleared!"); 
  } 
}, 1000);