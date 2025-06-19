
// BODY
const body = document.body;
console.log("body = ", body);

//getElementByTagName
const title = document.getElementsByTagName("h2");
console.log("Title = ", title);

// getElementByClassName
const heading = document.getElementsByClassName("title");
console.log("Heading = ", heading);

//getElementById
const para = document.getElementById("para");
console.log("paragraph = ", para);

//getElementByName
const paraName = document.getElementsByName("FirstName");
console.log("name = ", paraName);

//querySelector
const titleWithQuery = document.querySelector("name.FirstName");
console.log(titleWithQuery);

//querySelectorAll
const parag = document.querySelectorAll("para");
console.log("Paragraph: = ", parag);