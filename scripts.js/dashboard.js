const studentName = document.querySelector("#studentName");
const gmail = document.querySelector("#gmail");
const ajouter = document.querySelector("#ajouter");

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let ajou = JSON.parse(localStorage.getItem("ajouter"));


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

    for (let i = 0; i < ajou[currentUser].length; i++) {
        tab += `
        <tr>
            <td>${users[currentUser].fullName}</td>
            <td>25/5/2035</td>
            <td>
                <div>
                    <img src="images/view.png" alt="" class="eyes">
                </div>
            </td>
            <td>
                <div class="action row">
                    <div class="icon_style"><img class="icon icon_pad" src="images/non_valide.png" alt=""></div>
                    <div class="icon_style"><img class="icon icon_pad" src="images/edit.png" alt=""></div>
                    <div class="icon_style"><img class="icon icon_pad" src="images/delete.png" alt=""></div>
                </div>
            </td>
        </tr>
        `;
    }

    document.querySelector("#tab").innerHTML = tab;
}




