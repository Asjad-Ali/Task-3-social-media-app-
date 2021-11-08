    // 
    // System: Basic Social Media App
    // Developer: Asjad Ali (Frontend Trainee)
    // Date: November 8,2021
    // Organization: Programmer Force
    // Purpose: This file forgotpassword.js is responsible to handle 
    // the action and control of the forgot password Page using javascript.
    // to forgot the password


'use strict'

let valid=true;


    let ForgotEmail = document.getElementById("getEmail");
    let forgotPassBtn = document.getElementById("forgotPassBtn");
 
    forgotPassBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        ForgotEmail = ForgotEmail.value;

    if (ForgotEmail != "") {
        const keys = Object.keys(localStorage);
        for (let key of keys) {

           if (ForgotEmail === key) {
               valid=false;
               let Password=JSON.parse(localStorage.getItem(key)).password;
                document.getElementById("givePassword").value=Password;
               
            }
        }
        if(valid)
        {
            alert("Your Email doesn't exist")
        }
    }
    else
    {
        alert("Please Enter Email First")
}})
