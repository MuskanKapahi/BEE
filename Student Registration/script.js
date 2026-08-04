const form = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

form.addEventListener("submit", function(event){

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let isValid = true;

    // Name Validation
    if(name.value.trim() === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email Validation
    if(email.value.trim() === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!email.value.includes("@")){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Age Validation
    if(age.value.trim() === ""){
        ageError.textContent = "Age is required";
        isValid = false;
    }
    else if(age.value <= 0){
        ageError.textContent = "Enter a valid age";
        isValid = false;
    }

    if(isValid){
        alert("Form Submitted Successfully!");
        form.reset();
    }

});