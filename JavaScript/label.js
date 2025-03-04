const input = document.createElement("input"); 
input.setAttribute("type", "checkbox"); 
input.setAttribute("id", "terms"); 
document.body.appendChild(input); 
 
const label = document.createElement("label"); 
label.setAttribute("for", "terms"); 
label.textContent = "I accept the terms and conditions"; 
document.body.appendChild(label);