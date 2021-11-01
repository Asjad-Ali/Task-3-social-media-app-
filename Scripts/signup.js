'use strict'
var signUpname = document.getElementById("name");
var SignUpEmail = document.getElementById("email");
var SignUpPassword = document.getElementById("password");
var SignUpConPassword = document.getElementById("confirmpassword");


let valid = true;

function signup(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('get', "https://api.ipify.org?format=json", "true");

    xhr.onload = function() {
        const UserIp = JSON.parse(this.responseText).ip;
        localStorage.setItem("userIp", UserIp);
        console.log(UserIp);
    }


    xhr.send();



    signUpname = signUpname.value;
    SignUpEmail = SignUpEmail.value;
    SignUpPassword = SignUpPassword.value;
    SignUpConPassword = SignUpConPassword.value;

    const time = new Date();
    const agent = navigator.userAgent;


    const obj = {
        name: signUpname,
        email: SignUpEmail,
        password: SignUpPassword,
        confirmPassword: SignUpConPassword,
        SignUpTime: time,
        UserAgent: agent

    }


    if ((signUpname && SignUpEmail && SignUpPassword && SignUpConPassword) != "") {

        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignUpEmail === key) {
                valid = false;
                alert("This Email Already Exists");
            }
        }
        if (valid) {
            if ((SignUpPassword === SignUpConPassword)) {
                localStorage.setItem(obj.email, JSON.stringify(obj));
                alert("Congrats Yours account is successfully created");
                reload();
            } else {
                alert("Password Does not match")
            }

        }
    } else {
        alert("Kindly Fill the information Correctly");
    }

}





// function signup() {
//     console.log("I'm sign up script");
//     let userName = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let user = [{
//         userName,
//         email,
//         password,
//     }];
//     let prevUsers = [];
//     if(localStorage.getItem("users")){
//         prevUsers = JSON.parse(localStorage.getItem("users"));    
//     }
//     localStorage.setItem("users", JSON.stringify([...prevUsers, user]));
// }


