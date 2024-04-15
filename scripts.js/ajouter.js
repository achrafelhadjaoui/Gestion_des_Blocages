const selectFormateur = document.querySelector("#select_formateur");
const selectBootcamp = document.querySelector("#select_bootcamp");
const titre = document.querySelector("#titre");
const brief = document.querySelector("#brief");
const date = document.querySelector("#date");
const difficulte = document.querySelector("#difficulte");
const submit = document.querySelector("#submit");
const close = document.querySelector("#popupclose");

let ajouter = JSON.parse(localStorage.getItem("ajouter")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));



function ajouteBlocage(selectFormateur, selectBootcamp, titre, brief, date, difficulte)
{

    if (!ajouter[currentUser]) {
        ajouter[currentUser] = [];
    }

    ajouter[currentUser].push({
        selectFormateur,
        selectBootcamp,
        titre,
        brief,
        date,
        difficulte,
    });

    localStorage.setItem("ajouter", JSON.stringify(ajouter));

}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    ajouteBlocage(selectFormateur.value, selectBootcamp.value, titre.value, brief.value, date.value, difficulte.value);
    window.location.href = "Student_session.html";
});

//close
function closed(){
    window.location.href = "Student_session.html";
}

close.addEventListener("click", closed)





