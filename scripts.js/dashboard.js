const studentName = document.querySelector("#studentName");
const gmail = document.querySelector("#gmail");
const ajouter = document.querySelector("#ajouter");
const suprem = document.querySelector("#suprem");
const log_Out = document.querySelector("#logOut");

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let ajou = JSON.parse(localStorage.getItem("ajouter")) || [];


studentName.textContent = users[currentUser].fullName;
gmail.textContent = users[currentUser].creatEmail;

show();

//creat
function toAjouter() {
    window.location.href = "Ajouter.html";
    
}

ajouter.addEventListener("click", toAjouter);

//affiche

function show() {
    let tab = '';

    for (let i = 0; i < (ajou[currentUser] || []).length; i++) {

        let checkBoxSrc = ajou[currentUser][i].valide ? "images/validate.png" : "images/non_valide.png";
        let checkModifier = ajou[currentUser][i].valide ? "none" : "";
        tab += `
        <tr>
            <td>${users[currentUser].fullName}</td>
            <td>${ajou[currentUser][i].date}</td>
            <td>
                <div onclick = "display(${i})">
                    <img src="images/view.png" alt="" class="eyes">
                </div>
            </td>
            <td>
                <div class="action row">
                    <div class="icon_style"><img class="icon icon_pad checkBox" src="${checkBoxSrc}" alt=""></div>
                    <div class="icon_style" id="checkModifier" style="display: ${checkModifier}" onclick = "modif(${i})"><img class="icon icon_pad" src="images/edit.png" alt=""></div>
                    <div class="icon_style" id="suprem" onclick = "del(${i})"><img class="icon icon_pad" src="images/delete.png" alt=""></div>
                </div>
            </td>
        </tr>
        `;
    }
    document.querySelector("#tab").innerHTML = tab;
    localStorage.setItem("ajouter", JSON.stringify(ajou));
}
    

//delete
function del(index) {
    ajou[currentUser].splice(index, 1) ;
    localStorage.setItem("ajouter", JSON.stringify(ajou));
    show();
}

//modifier
function modif(index) {
    localStorage.setItem("index", JSON.stringify(index));
    window.location.href = "Modifier.html";
}

//display difficulte

function display(index) {
    const close = document.querySelector("#popupclose");
    let showDifficulte = document.querySelector("#showDifficulte");

    function closed()
    {
        document.querySelector("#overlay").style.display = "none";
        document.querySelector("#popup").style.display = "none";
    }

    document.querySelector("#overlay").style.display = "block";
    document.querySelector("#popup").style.display = "block";

    showDifficulte.innerText = ajou[currentUser][index].difficulte;

    close.addEventListener("click", closed)

}

//logOut

function logOut() {
    window.location.href = "login_and_sign_up.html";
}

log_Out.addEventListener("click", logOut);

