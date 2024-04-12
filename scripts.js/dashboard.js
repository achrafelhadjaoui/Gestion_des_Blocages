const studentName = document.querySelector("#studentName");
const gmail = document.querySelector("#gmail");
const ajouter = document.querySelector("#ajouter");

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
//let ajou = JSON.parse(localStorage.getItem("ajouter"));

studentName.textContent = users[currentUser].fullName;
gmail.textContent = users[currentUser].creatEmail;

function toAjouter() {
    window.location.href = "Ajouter.html";
}



ajouter.addEventListener("click", toAjouter)




