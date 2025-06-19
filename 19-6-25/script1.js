// function changeTitle() {
//     const title = document.getElementsByTagName("h1")[0].innerHTML = "Student Form"
// }


//JS
// const title = document.getElementsByTagName("h1")[0].innerHTML;

// console.log("title: ", title);

function changeTitle() {
  const title = (document.querySelector("h1").innerText = "Student Form<");
}

function formValidate() {
    const pass = document.getElementsByName("Password")[0].value;
    const mail = document.getElementsByName("Email")[0].value;

    console.log("Password: ", pass);
    if(pass.length < 8) {
        alert("Password must be more then 8 char");
        return;
    }

    num = false;
    cap = false;
    ag = false;
    avail = false;

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

    for(let i=0; i<mail.length; i++) {
        if(mail[i] == '@') avail = true;
    }
    if(!ag) {
        alert("There must be @ symbol");
        return;
    }

    if(avail && num && cap && ag) {
        alert("All are correct !!!!")
    }
    else if(!avail) alert("There must @ in Email");
    else if(!num) alert("There must be a Number");
    else if(!cap) alert("There must be a char in upper case");
    

    
}