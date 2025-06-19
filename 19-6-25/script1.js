// function changeTitle() {
//     const title = document.getElementsByTagName("h1")[0].innerHTML = "Student Form"
// }


//JS
// const title = document.getElementsByTagName("h1")[0].innerHTML;

// console.log("title: ", title);

function changeTitle() {
  const title = (document.querySelector("h1").innerText = "Student Form<");
}


function checkPass(password) {
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

  if (!checkText(password)) {
    alert("Password not follows the rule!");
    return;
  }

  alert("Form Submitted Successfully!");
  return;
}
