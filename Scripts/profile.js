    // 
    // System: Basic Social Media App
    // Developer: Asjad Ali (Frontend Trainee)
    // Date: November 8,2021
    // Organization: Programmer Force
    // Purpose: This file profile.js is responsible to handle 
    // the action and control of the show the profile data using javascript.
    // and also update the profile information


'use strict'

console.log("I'm user profile");
const curentuser = localStorage.getItem("currentUser");


const keysOfLS = Object.keys(localStorage);
for (let key of keysOfLS) {

    if (key === curentuser) {
    const CurrentUserData = JSON.parse(localStorage.getItem(key));

    document.getElementById("showName").value=CurrentUserData.name;
    document.getElementById("showEmail").value=CurrentUserData.email;
    document.getElementById("showPassword").value=CurrentUserData.password;
    }}


{
    const user = localStorage.getItem("currentUser");

const keysOfLS = Object.keys(localStorage);
for (let key of keysOfLS) {

    if (key === user) {
    const CurrentUserData = JSON.parse(localStorage.getItem(key));


    document.getElementById("updateName").value=CurrentUserData.name;
    document.getElementById("updateEmail").value=CurrentUserData.email;
    document.getElementById("updatePassword").value=CurrentUserData.password;
    document.getElementById("updateConfirmPassword").value=CurrentUserData.confirmPassword;
    }}

    const updateBtn = document.getElementById("updateBtn")  


    updateBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        let getNameUpdate = document.getElementById("updateName");
        let getEmailUpdate = document.getElementById("updateEmail");
        let getPasswordUpdate = document.getElementById("updatePassword");
        let getConfirmPasswordUpdate = document.getElementById("updateConfirmPassword");

        getNameUpdate = getNameUpdate.value;
        getEmailUpdate = getEmailUpdate.value;
        getPasswordUpdate = getPasswordUpdate.value;
        getConfirmPasswordUpdate=getConfirmPasswordUpdate.value;


        const obj = {
            name: getNameUpdate,
            email: getEmailUpdate,
            password: getPasswordUpdate,
            confirmPassword: getConfirmPasswordUpdate,
        }

        console.log(obj)

        const keys = Object.keys(localStorage);
        for (let key of keys) 
        {
            if(user === key)
            {
                if ((getPasswordUpdate === getConfirmPasswordUpdate)) {
                    if(user!==getEmailUpdate)
                    {
                        localStorage.removeItem(user);
                        localStorage.setItem("currentUser", getEmailUpdate);
                        localStorage.setItem(obj.email, JSON.stringify(obj));
                    }
                    else
                    {
                        localStorage.setItem(obj.email, JSON.stringify(obj));
                        localStorage.setItem("currentUser", getEmailUpdate);
                    }
                    
                    alert("Your account Information is Updated");
                } else 
                {
                    alert("Password Does not match")
                }
            }
            
        }
    })
}
