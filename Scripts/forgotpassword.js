'use strict'

console.log("hello I'm forgot password");



function ForgotPassword() {
    let ForgotEmail = document.getElementById("getEmail");
    let ForgotPasswordID = document.querySelector("givePassword");


    ForgotEmail = ForgotEmail.value;
    alert(ForgotEmail)
    if (ForgotEmail != "") {

        const keys = Object.keys(localStorage);
        for (let key of keys) {
            // alert(key)
            if (ForgotEmail === key) {
                password = JSON.parse(localStorage.getItem(key)).name;
                alert("Your Password is:"+password )
               
                console.log(CurrentUserData.password)
                ForgotPasswordID.setAttribute("value",password);
               
            }
            else
            {
                alert("Email dosn't exit");
            }
        }
    }
    else
    {
        alert("Please Enter Email First")
    }

}
