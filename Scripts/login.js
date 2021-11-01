'use strict'

let SignInEmail = document.getElementById('email');
let SignInpassword = document.getElementById('password');

let WelcomeName = "";

function login() {


    SignInEmail = SignInEmail.value;
    SignInpassword = SignInpassword.value;




    if ((SignInEmail && SignInpassword) != "") {



        localStorage.setItem("currentUser", SignInEmail);

        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignInEmail === key) {

                if (SignInpassword === JSON.parse(localStorage.getItem(key)).password) {

                    WelcomeName = JSON.parse(localStorage.getItem(key)).name;
                    console.log("WelcomeName");

                    alert("Logged In Successfully");
                    window.open("../Index.html",'_blank');
                    // location.href = "";

                }
                else
                {
                    alert("Password incorrect. Please enter correct password.")

                }

            }
        }
    }


};


// let state = false;

// function toggle() {
//     const pass = document.getElementById("email");


//     if (state) {
//         pass.setAttribute("type", "email");
//         state = false;

//     } else {
//         pass.setAttribute("type", "text");
//         state = true;

//     }

// }

// function toggle1() {
//     const pass1 = document.getElementById("password");

//     if (state) {
//         pass1.setAttribute("type", "password");
//         state = false;

//     } else {
//         pass1.setAttribute("type", "text");
//         state = true;

//     }

// }


