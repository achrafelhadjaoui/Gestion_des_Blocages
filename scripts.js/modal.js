const directed = document.querySelector("#directed");
const peer = document.querySelector("#peer");
const formateur = document.querySelector("#formateur");
let notePeer = document.querySelector("#notePeer")
let noteFormateur = document.querySelector("#noteFormateur")
let noteDirected = document.querySelector("#notedirected")
const submit = document.querySelector("#submit");
const close = document.querySelector("#popupclose");



let ajouter = JSON.parse(localStorage.getItem("ajouter")) || [];
let row = JSON.parse(localStorage.getItem("row"));
let colum = JSON.parse(localStorage.getItem("colum"));

show();

function show() {
    if (ajouter[row][colum].note) {
        document.querySelectorAll(".label").forEach(label => {
            label.style.display = "none";
        });
        document.querySelector("button").style.display = "none";
        let elem = document.createElement("textarea");
        elem.style.display = "block";
        elem.innerText = ajouter[row][colum].note;
        document.querySelector("form").appendChild(elem)
    }
}

directed.addEventListener("click",function() {
    noteDirected.style.display = "block";
});

peer.addEventListener("click",function() {
    
    notePeer.style.display = "block";
});

formateur.addEventListener("click",function() {
    noteFormateur.style.display = "block";
});

function done() {
    event.preventDefault();
    if (noteDirected.value) {
        ajouter[row][colum].note = noteDirected.value
    }
    else if (notePeer.value) {
        ajouter[row][colum].note = notePeer.value
    }
    else if (noteFormateur.value) {
        ajouter[row][colum].note = noteFormateur.value
    }

    localStorage.setItem("ajouter", JSON.stringify(ajouter));
    closed();
}

submit.addEventListener("click", done);

function closed() {
    window.location.href = "admin.html";
}

close.addEventListener("click", closed)

