// 
// System: Basic Social Media App
// Developer: Asjad Ali (Frontend Trainee)
// Date: November 8,2021
// Organization: Programmer Force
// Purpose: This file validation.js is responsible to handle all the validations 
//required in Signup and Login and also
// store data of users.
// We use localStorage to save users data and sessionStorage to save sessions data, 
//although localStorage is not
// a good idea, as it is not secured way, but due to limitations we have use it.


"use strict";



//validators functions

//This function validate Name of the user
function validateName() {
  //check if empty
  if (checkIfEmpty(fullName)) return;

  //is if it has only letters
  if (!checkIfOnlyLetters(fullName)) return;
  return true;
}

//This function validate Email of the user
function validateEmail() {
  //check if empty
  if (checkIfEmpty(email)) return;
  return true;
}

//This function validate email of the user in login form
function validateLoginEmail(SignInEmail) {
  //check if empty
  if (checkIfEmpty(SignInEmail)) return;
  return true;
}

//This function used to validate password of the user
function validatePassword() {
  //check if empty
  if (checkIfEmpty(pwd)) return;
  //Must be in certain length
  if (!meetLength(pwd, 8, 100)) return;
  return true;
}

//This function used to validate password of the user in login form
function validateLoginPassword(SignInpassword) {
  //check if empty
  if (checkIfEmpty(SignInpassword)) return;
  //Must be in certain length
  if (!meetLength(SignInpassword, 8, 100)) return;
  return true;
}

//This function used to validate confirm password field
function validateConfirmPassword() {
  //check if empty
  if (checkIfEmpty(cpwd)) return;
  //check password is same or not
  if (!samePassword(pwd, cpwd)) return;
  return true;
}

//utility functions for validation

/*
This function check whether the value is empty of not
args: field (field need to check empty or not)
*/
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    //set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    //set field valid
    setValid(field);
    return false;
  }
}

/*
This function check whether the value is empty or not
args: value (value of the field)
*/
function isEmpty(value) {
  if (value === "") {
    return true;
  } else {
    return false;
  }
}

/*
This function set Invalid to input in case of wrong input
args: field, message (message to display as an error)
*/

function setInvalid(field, message) {
  const formControl = field.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-group error";
  small.innerText = message;

  //   field.classList.add("invalid");
  //   field.classList.remove("valid");
  //   field.nextElementSibling.innerHTML = message;
  //   field.nextElementSibling.style.color = red;
}

/*
This function set Valid to input in case of correct input
args: field
*/

function setValid(field) {
  const formControl = field.parentElement;
  formControl.className = "form-group success";
}

/*
This function check that input contain letters only.
args: field
*/
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}

/*
This function check that password meet the required length or not.
args: field, minLength (minimum length of password), maxLength (maximum length of password)
*/
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length <= maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(field, `${field.name} must be at least ${minLength}`);
    return false;
  } else {
    setInvalid(field, `${field.name} must be shorter than ${maxLength}`);
    return false;
  }
}

/*
This function check that password and confirm password are same or not
args: field1,  field2
*/
function samePassword(field1, field2) {
  if (field1.value != field2.value) {
    setInvalid(field2, `Password not match`);
    return false;
  } else {
    setValid(field2);
    return true;
  }
}
