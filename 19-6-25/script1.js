// function changeTitle() {
//     const title = document.getElementsByTagName("h1")[0].innerHTML = "Student Form"
// }


//JS
// const title = document.getElementsByTagName("h1")[0].innerHTML;

// console.log("title: ", title);

function changeTitle() {
  const title = (document.querySelector("h1").innerText = "Student Form<");
}

  

function checkPass(pass) {
    if(pass.length < 8) return false;
    let num = false;
    let cap = false;
    let ag = false;
    for(let i=0; i<pass.length; i++) {
        if(pass[i] >= '1' && pass[i] <= '9') {
            num = true;
        }
        else if(pass[i] >= 'A' && pass[i] <= 'Z') {
            cap = true;
        }
        else if(pass[i] == '@') {
            ag = true;
        }
    }

    if(num && cap && ag) return true;
    return false;
}

// function checkMail(mail) {

// }


function checkText(text) {
  let hasUpperCase = false,
    hasNumber = false;
  for (let i = 0; i < text.length; i++) {
    if (isUpperCase(text[i])) hasUpperCase = true;
    if (isNumber(text[i])) hasNumber = true;
    if (hasUpperCase && hasNumber) return true;
  }

  return false;
}

function isUpperCase(char) {
  if (char >= "A" && char <= "Z") return true;

  return false;
}

function isNumber(num) {
  if (Number(num) >= 0 && Number(num) <= 9) return true;
  else false;
}

function formValidate() {
  const firstName = document.getElementsByName("First Name")[0].value;
  const lastName = document.getElementsByName("Last Name")[0].value;
  const email = document.getElementsByName("Email")[0].value;
  const pass = document.getElementsByName("Password")[0].value;

  if (!firstName.length || !lastName.length || !email.length || !pass.length) {
    alert("Some Fields are Empty!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email is Invalid!");
    return;
  }

  if (!checkText(pass)) {
    alert("Password not follows the rule!");
    return;
  }

  // if(!checkPass(pass)) {
  //    alert("Password not follows the rule!");
  //   return;
  // } 


  document.getElementsByTagName("form")[0].style.backgroundColor="green";
  alert("Form Submitted Successfully!");
  return;
}

//toggle class
  function toggle() {
    const form = document.getElementsByTagName("form")[0];

    form.classList.toggle("form2");
  }

  function changeColorRed() {
    const form = document.getElementsByTagName("form")[0];
    form.style.backgroundColor="red";
  }
  function changeColorPink() {
    const form = document.getElementsByTagName("form")[0];
    form.style.backgroundColor="pink";
  }
  function changeColorBrown() {
    const form = document.getElementsByTagName("form")[0];
    form.style.backgroundColor="brown";
  }
  function changeColorSky() {
    const form = document.getElementsByTagName("form")[0];
    form.style.backgroundColor="skyblue";
  }














                // TEACHER CODE :-
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>DOM</title>
//     <link rel="stylesheet" href="./styles.css" />
//   </head>
//   <body>
//     <h1>Student Form</h1>
//     <br />
//     <form class="form">
//       <div>
//         <label>First Name: </label>
//         <input name="First Name" type="text" placeholder="FirstName" value="" />
//       </div>
//       <br />
//       <div>
//         <label>Last Name: </label>
//         <input name="Last Name" type="text" placeholder="LastName" value="" />
//       </div>
//       <br />
//       <div>
//         <label>Email: </label>
//         <input name="Email" type="email" placeholder="abc@gmail.com" value="" />
//       </div>
//       <br />
//       <div>
//         <label>Password: </label>
//         <input name="Password" value="" type="password" placeholder="Password" />
//       </div>
//       <br />
//     </form>
//     <button onclick="toggle()">Toggle</button>
//     <button onclick="formValidate()">Form Validate</button>

//     <script src="./script.js"></script>
//   </body>
// </html>

// //CSS

// * {
//   margin: 0;
//   padding: 0;
//   font-family: sans-serif;
// }

// h1 {
//   text-align: center;
// }

// form {
//   display: flex;
//   height: 100%;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// }

// input {
//   font-size: 16px;
//   padding: 8px 10px;
// }

// label {
//   font-size: 16px;
//   font-weight: 600;
// }

// button {
//   display: flex;
//   margin: 0 auto;
//   font-size: 16px;
//   padding: 8px 10px;
// }

// .form {
//   background-color: green;
// }

// .form2 {
//   background-color: yellow;
// }


// //JS
// function checkText(text) {
//   let hasUpperCase = false,
//     hasNumber = false;
//   for (let i = 0; i < text.length; i++) {
//     if (isUpperCase(text[i])) hasUpperCase = true;
//     if (isNumber(text[i])) hasNumber = true;
//     if (hasUpperCase && hasNumber) return true;
//   }

//   return false;
// }

// function isUpperCase(char) {
//   if (char >= "A" && char <= "Z") return true;

//   return false;
// }

// function isNumber(num) {
//   if (Number(num) >= 0 && Number(num) <= 9) return true;
//   else false;
// }

// function formValidate() {
//   const firstName = document.getElementsByName("First Name")[0].value;
//   const lastName = document.getElementsByName("Last Name")[0].value;
//   const email = document.getElementsByName("Email")[0].value;
//   const pass = document.getElementsByName("Password")[0].value;

//   if (!firstName.length || !lastName.length || !email.length || !pass.length) {
//     alert("Some Fields are Empty!");
//     return;
//   }

//   if (!email.includes("@")) {
//     alert("Email is Invalid!");
//     return;
//   }

//   if (!checkText(password)) {
//     alert("Password not follows the rule!");
//     return;
//   }

//   alert("Form Submitted Successfully!");
//   return;
// }

//style
// const form = (document.getElementsByTagName("form")[0].style.backgroundColor = "green");

//add class
// document.getElementsByTagName("form")[0].classList.add("myform");

//remove class
// document.getElementsByTagName("form")[0].classList.remove("myForm2");

//toggle class
  // function toggle() {
  //   const form = document.getElementsByTagName("form")[0];

  //   form.classList.toggle("form2");
  // }

