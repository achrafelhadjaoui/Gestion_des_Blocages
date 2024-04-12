
document.addEventListener("DOMContentLoaded", function() {

const loginForm = document.querySelector("#Login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#submit_login");
const fullName = document.querySelector("#fullName");
const creatEmail = document.querySelector("#creatEmail");
const creatPassword = document.querySelector("#creatpassword");
const repeatPassword = document.querySelector("#repeat_password");
const creatAccount = document.querySelector("#creatAccount");
const backToLogin = document.querySelector("#backToLogin");
const creat = document.querySelector("#submitCreat");

let users = JSON.parse(localStorage.getItem("users")) || [];
//localStorage.removeItem("users");

function moveToSignUp() {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#Sign_up").style.display = "block";
}

function moveToLogin(){
    document.querySelector("#Sign_up").style.display = "none";
    document.querySelector("#login").style.display = "block";
}

function signUp(fullName, creatEmail, creatPassword) {

    const existingUser = users.find(user => user.email === creatEmail || user.fullName === fullName);

    /*if (creatPassword.value !== repeatPassword.value) {
        console.log(creatPassword.value);
        console.log(repeatPassword.value);
        alert("wrong password!!!!");
    }*/
    if (existingUser) {
        alert(`${existingUser.value} already exist`);
    }
    else {
        users.push({
            fullName,
            creatEmail,
            creatPassword,    
        });
        
        localStorage.setItem("users", JSON.stringify(users));

        //moveToLogin();
        alert("User added successfully.");
    }
}

function addUser(email, password) {
    // Check if the email already exists in the stored user data
    const existingUserIndex = users.findIndex (user => user.creatEmail === email && user.creatPassword === password);
    if (existingUserIndex !== -1) {
        alert(`Welcome ${users[existingUserIndex].fullName}`);
        localStorage.setItem("currentUser", JSON.stringify(existingUserIndex));
        window.location.href = "Student_session.html";
        console.log(password);
        alert(`Welcome ${users[existingUserIndex].fullName}`);
    }
    else {
        alert("try creat an account");
    }
/*
    // If the email doesn't exist, add the new user
    users.push({
        email,
        password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    console.log("User added successfully.");
    return users.length - 1; // Return the index of the newly added user
    */
}

creat.addEventListener('click', function(event) {
    event.preventDefault();
    signUp(fullName.value, creatEmail.value, creatPassword.value);
});

login.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let index = addUser(email.value, password.value);
    
    //window.location.href = "Student_session.html";
    /*alert("Login successful");
    alert(index);*/
    
});

creatAccount.addEventListener("click", moveToSignUp);
backToLogin.addEventListener("click", moveToLogin);

});