const selectFormateur = document.querySelector("#select_formateur");
const selectBootcamp = document.querySelector("#select_bootcamp");
const titre = document.querySelector("#titre");
const brief = document.querySelector("#brief");
const difficulte = document.querySelector("#difficulte");
const submit = document.querySelector("#submit");

let ajouter = JSON.parse(localStorage.getItem("ajouter")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));



function ajouteBlocage(selectFormateur, selectBootcamp, titre, brief, difficulte)
{

    if (!ajouter[currentUser]) {
        ajouter[currentUser] = [];
    }

    ajouter[currentUser].push({
        selectFormateur,
        selectBootcamp,
        titre,
        brief,
        difficulte,
    });

    localStorage.setItem("ajouter", JSON.stringify(ajouter));

}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    ajouteBlocage(selectFormateur.value, selectBootcamp.value, titre.value, brief.value, difficulte.value);
    window.location.href = "Student_session.html";
});





