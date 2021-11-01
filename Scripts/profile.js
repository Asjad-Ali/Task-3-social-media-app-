'use strict'

console.log("I'm user profile");


let ProfileName = document.getElementById("showName")
let ProfileEmail = document.getElementById("showEmail")
let ProfilePassword = document.getElementById("showPassword")
let ProfileConfirmPassword = document.getElementById("showConfirmPassword")


const user = localStorage.getItem("currentUser");


const keys = Object.keys(localStorage);
for (let key of keys) {
    // console.log(key);
    if (key === user) {
        const CurrentUserData = JSON.parse(localStorage.getItem(key));
        ProfileName.setAttribute("value", CurrentUserData.name);
        ProfileEmail.setAttribute("value", CurrentUserData.email);
        ProfilePassword.setAttribute("value", CurrentUserData.password);
        ProfileConfirmPassword.setAttribute("value", CurrentUserData.confirmPassword);
    }
}


ProfileName = ProfileName.value;
ProfileEmail = ProfileEmail.value;
ProfilePassword = ProfilePassword.value;
ProfileConfirmPassword = ProfileConfirmPassword.value;

console.log(ProfileEmail);

let validate = true;

function update() 
{


    let ProfileNameUpdate = document.getElementById("showName");
    let ProfileEmailUpdate = document.getElementById("showEmail");
    let ProfilePasswordUpdate = document.getElementById("showPassword");
    let ProfileConfirmPasswordUpdate = document.getElementById("showPassword");

    ProfileNameUpdate = ProfileNameUpdate.value;
    ProfileEmailUpdate = ProfileEmailUpdate.value;
    ProfilePasswordUpdate = ProfilePasswordUpdate.value;
    ProfileConfirmPasswordUpdate=ProfileConfirmPasswordUpdate.value;

    console.log(ProfileEmailUpdate);


    // console.log(signUpname);

    const time = new Date();
    const agent = navigator.userAgent;

    const obj = {
        name: ProfileNameUpdate,
        email: ProfileEmailUpdate,
        password: ProfilePasswordUpdate,
        confirmPassword: ProfileConfirmPasswordUpdate,
        SignUpTime: time,
        UserAgent: agent
    }

    console.log(obj);

    if (true) {


        const keys = Object.keys(localStorage);
        for (let key of keys) 
        {

            if (ProfileEmailUpdate === key) 
            {
                validate = false;
                alert("Email Already Exists");

            }
        }

        if (validate) {

            if ((ProfilePasswordUpdate === ProfileConfirmPasswordUpdate)) {
                localStorage.setItem(obj.email, JSON.stringify(obj));
                localStorage.setItem("currentUser", ProfileEmailUpdate);
                localStorage.removeItem(ProfileEmail);
                alert("Your account Information is Updated");
            } else 
            {
                alert("Password Does not match")
            }

        }
    }
}