    // 
    // System: Basic Social Media App
    // Developer: Asjad Ali (Frontend Trainee)
    // Date: November 8,2021
    // Organization: Programmer Force
    // Purpose: This file signup.js is responsible to handle 
    // the action and control signup action and Page using javascript.


'use strict'
// Sign Up Ffields and button
var fullName = document.getElementById("name");
var email = document.getElementById("Email");
var pwd = document.getElementById("password");
var cpwd = document.getElementById("confirmpassword");

var signupForm = document.getElementById("signupBtn");

signupForm.addEventListener('click',  (event) => {

  event.preventDefault();

 

 
let valid=true;

  //if all the validations are true then store user data and redirect to login page
  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {

    let obj = {
      name: fullName.value,
      email: email.value,
      password: pwd.value,
      confirmPassword: cpwd.value,
    };

    const keys = Object.keys(localStorage);
    for (let key of keys) {

      if (obj.email === key) {
        valid=false;
        alert("This Email Already Exists");
        }
    }
    if(valid)
    {
      localStorage.setItem(obj.email, JSON.stringify(obj));
      alert("Congrats Yours account is successfully created");
      window.open("/login.html", "_self");
    }

    }
});