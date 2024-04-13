const titre = document.querySelector("#titre");
const brief = document.querySelector("#brief");
const difficulte = document.querySelector("#difficulte");
const submit = document.querySelector("#submit");

let ajouter = JSON.parse(localStorage.getItem("ajouter"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const theIndex = JSON.parse(localStorage.getItem("index"));


show(ajouter[currentUser][theIndex].titre,ajouter[currentUser][theIndex].brief,ajouter[currentUser][theIndex].brief);

function show(titreV, briefV, difficulteV) {
    titre.value = titreV;
    brief.value = briefV;
    difficulte.value = difficulteV;
}

function modifier(titre, brief, difficulte) {
    ajouter[currentUser][theIndex].titre = titre;
    ajouter[currentUser][theIndex].brief = brief;
    ajouter[currentUser][theIndex].difficulte = difficulte;
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    modifier(titre.value, brief.value, difficulte.value);
    localStorage.setItem("ajouter", JSON.stringify(ajouter));
    window.location.href = "Student_session.html";
})