function displayTime() { 
    console.log("Current Time: " + new Date().toLocaleTimeString()); 
  } 
   
  let intervalId = setInterval(displayTime, 1000);