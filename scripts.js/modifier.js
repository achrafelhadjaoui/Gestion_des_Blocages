const titre = document.querySelector("#titre");
const brief = document.querySelector("#brief");
const difficulte = document.querySelector("#difficulte");
const submit = document.querySelector("#submit");
const closed = document.querySelector(".popupcontrols");

let ajouter = JSON.parse(localStorage.getItem("ajouter"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const theIndex = JSON.parse(localStorage.getItem("index"));


show(ajouter[currentUser][theIndex].titre,ajouter[currentUser][theIndex].brief,ajouter[currentUser][theIndex].difficulte);

function show(titreV, briefV, difficulteV) {
    titre.value = titreV;
    brief.value = briefV;
    difficulte.value = difficulteV;
    console.log("yes")
    console.log(difficulte.value)
}

function modifier(titre, brief, difficulte) {
    ajouter[currentUser][theIndex].titre = titre;
    ajouter[currentUser][theIndex].brief = brief;
    ajouter[currentUser][theIndex].difficulte = difficulte;

    let check = ajouter[currentUser][theIndex];

    if (!check.titre || !check.brief || !check.difficulte) {
        alert("enter all the inputs");
    } else {
        alert("info modified successfully");
        localStorage.setItem("ajouter", JSON.stringify(ajouter));
        window.location.href = "Student_session.html";
    }


}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    modifier(titre.value, brief.value, difficulte.value);
});

function move() 
{
    window.location.href = "Student_session.html";
}

closed.addEventListener("click", move);