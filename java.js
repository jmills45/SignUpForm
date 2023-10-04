const userPassword = document.querySelector("#user_password");
const userPasswordConfirm = document.querySelector("#user_password_confirm");
const passwordMatch = document.querySelectorAll(".passwordMatch");

userPassword.addEventListener("input", checkPasswordMatch);
userPasswordConfirm.addEventListener("input", checkPasswordMatch);

const userEmail = document.querySelector("#user_email");
const validEmail = document.querySelector(".validEmail");

const userPhone = document.querySelector("#user_phone");
const validPhone = document.querySelector(".validPhone");

userEmail.addEventListener("input", checkEmail);
userPhone.addEventListener("input", checkPhone);

function checkPasswordMatch() {
    if (userPassword.value != userPasswordConfirm.value) {
        userPassword.classList.add("error");
        userPasswordConfirm.classList.add("error");

        passwordMatch.forEach(element => {
            element.classList.remove("passwordMatch")
        });
    } else {
        userPassword.classList.remove("error");
        userPasswordConfirm.classList.remove("error");

        passwordMatch.forEach(element => {
            element.classList.add("passwordMatch")
        });
    }
}

function checkEmail() {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    if(userEmail.value.match(validRegex)) {  
        validEmail.classList.add("validEmail");
    } else {
        validEmail.classList.remove("validEmail");
    }
}

function checkPhone() {
    let validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
   
    if(userPhone.value.match(validRegex)) {  
        validPhone.classList.add("validPhone");
    } else {
        validPhone.classList.remove("validPhone");
    }
}