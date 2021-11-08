    // 
    // System: Basic Social Media App
    // Developer: Asjad Ali (Frontend Trainee)
    // Date: November 8,2021
    // Organization: Programmer Force
    // Purpose: This file login.js is responsible to handle 
    // the action and control of the login Page using javascript.
    




'use strict'

let SignInEmail = document.getElementById('Loginemail');
let SignInpassword = document.getElementById('Loginpassword');
let loginBtn = document.getElementById('login-btn');



var Valid=true;

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var signInEmail = SignInEmail.value;
    var signInpassword = SignInpassword.value;

    if (validateLoginEmail(SignInEmail) && validateLoginPassword(SignInpassword)) {

        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (signInEmail === key) {

                if (signInpassword === JSON.parse(localStorage.getItem(key)).password) {

                    // WelcomeName = JSON.parse(localStorage.getItem(key)).name;
                    localStorage.setItem("currentUser", signInEmail);
                    
                    alert("Logged In Successfully");
                    window.open("/Index.html",'_self');

                }
                else
                {
                    alert("Password incorrect. Please enter correct password.")

                }

            }

        }
    } 
    else
    alert("Please Enter both Email and Password ")


});