const adminName = document.querySelector("#adminName");
const gmail = document.querySelector("#gmail");
const modal = document.querySelector("#modal");
//const valide = document.querySelector("#valide");
const log_Out = document.querySelector("#logOut");

const validate = document.querySelector("#valide");


let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || 0;
let ajouter = JSON.parse(localStorage.getItem("ajouter")) || [];


adminName.textContent = users[0].fullName;
gmail.textContent = users[0].creatEmail;

show();



//affiche

function show() {

    let tab = '';

    for(let i = 1; i < ajouter.length; i++) {
        for (let j = 0; j < ajouter[i].length; j++) {
            if (ajouter[i][j].selectFormateur === "Abed Elaziz") {
                let checkBoxSrc = ajouter[i][j].valide ? "images/validate.png" : "images/non_valide.png";
                tab += `
                <tr>
                            <td>${users[i].fullName}</td>
                            <td>${ajouter[i][j].date}</td>
                            <td>
                                <div onclick = "display(${i}, ${j})">
                                    <img src="images/view.png" alt="" class="eyes">
                                </div>
                            </td>
                            <td>
                                <div class="action row">
                                    <div class="icon_style" onclick = "valide(${i}, ${j})">
                                        <img class="icon icon_pad" id="nonValide" src="${checkBoxSrc}" alt="">
                                    </div>
                                    <div class="icon_style" onclick = "note(${i}, ${j})"><img class="icon icon_pad" src="images/edit.png" alt=""></div>                            
                                    </div>
                            </td>
                    </tr>
                    `;     
            }   
        }        
    }
    document.querySelector("#tab").innerHTML = tab;
}




//valide

let nonValide = document.querySelectorAll("#nonValide");
function valide(i, j) {
    nonValide.forEach(icon => {
        icon.addEventListener("click", function() {
            this.src = "images/validate.png"
        });
    });
    ajouter[i][j].valide = "true";
    localStorage.setItem("ajouter", JSON.stringify(ajouter));

}

// notes

function note(i, j) {
    localStorage.setItem("row", JSON.stringify(i));
    localStorage.setItem("colum", JSON.stringify(j));
    window.location.href = "modal.html";
}

//display difficulte

function display(index, j) {
    const close = document.querySelector("#popupclose");
    let showDifficulte = document.querySelector("#showDifficulte");

    function closed()
    {
        document.querySelector("#overlay").style.display = "none";
        document.querySelector("#popup").style.display = "none";
    }

    document.querySelector("#overlay").style.display = "block";
    document.querySelector("#popup").style.display = "block";

    showDifficulte.innerText = ajouter[index][j].difficulte;

    close.addEventListener("click", closed)

}

//logOut

function logOut() {
    window.location.href = "login_and_sign_up.html";
}

log_Out.addEventListener("click", logOut);

