let continueCreate1 = document.getElementById("ContinuerPaiementCreate1"); /*boutton continuer 1*/
let continueCreate2 = document.getElementById("ContinuerPaiementCreate2"); /*boutton continuer 2*/
let createAccount3 = document.getElementById("PaiementCreate3"); /*boutton create 3*/

let boxCreate1 = document.getElementById("CreateAccountPaiement"); /*boutton create 3*/
let boxCreate2 = document.getElementById("CreateAccountPaiement2"); /*boutton create 3*/
let boxCreate3 = document.getElementById("CreateAccountPaiement3"); /*boutton create 3*/
let boxCreate4 = document.getElementById("validationCreate"); /*boutton create 3*/

let password1 = document.getElementById("password2"); /*boutton create 3*/
let password2 = document.getElementById("passwordPaiement2"); /*boutton create 3*/



// continueCreate1.addEventListener("click", () => {/*bouton continuer creation 1 cliqué*/
//     boxCreate1.style.display = "none";
//     boxCreate2.style.display = "flex";
//     boxCreate3.style.display = "none";
//     boxCreate4.style.display = "none";
// })
continueCreate2.addEventListener("click", () => {/*bouton continuer creation 2 cliqué*/


    let passwordNonIdentique = document.getElementById("passworddiffent"); /*pass differnet*/
    let patternIncorrect = document.getElementById("patternIncorrect"); /*pass differnet*/

    patternIncorrect.style.display = "none";
    passwordNonIdentique.style.display = "none";

    var patternpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$/;

    if (password1.value.match(patternpassword)) {
        if (password1.value != password2.value) {
            passwordNonIdentique.style.display = "flex";
        }
        else {
            boxCreate1.style.display = "none";
            boxCreate2.style.display = "none";
            boxCreate3.style.display = "flex";
            boxCreate4.style.display = "none";
        }

    }
    else {
        patternIncorrect.style.display = "flex";
    }




    // if (password1.value != password2.value) {
    //     passwordNonIdentique.style.display = "flex";


    //     var patternpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$/;

    //     if (password1.value.match(patternpassword)) {
    //         passwordNonIdentique.style.display = "flex";
    //     }
    //     else {
    //         passwordNonIdentique.style.display = "flex";
    //     }
    // }
    // else {
    //     boxCreate1.style.display = "none";
    //     boxCreate2.style.display = "none";
    //     boxCreate3.style.display = "flex";
    //     boxCreate4.style.display = "none";
    // }
})
createAccount3.addEventListener("click", () => {/*bouton continuer creation 3 cliqué*/
    let infoPersoManquante = document.getElementById("informationsmanquante"); /*pass differnet*/

    //input
    let inputFirstName = document.getElementById("firstname");
    let inputSurname = document.getElementById("name");
    let inputDateborn = document.getElementById("dateborn");
    let inputTel = document.getElementById("numtel");

    if ((inputFirstName.value == "") || (inputSurname.value == "")|| (inputDateborn.value == "")|| (inputTel.value == "")) {
        infoPersoManquante.style.display = "flex"
    }
    else {
        boxCreate1.style.display = "none";
        boxCreate2.style.display = "none";
        boxCreate3.style.display = "none";
        boxCreate4.style.display = "flex";
    }
})




function ValidateEmail(inputText) {
    let emailuser = document.getElementById("emailCreatePaiement"); /*email user*/
    let emailnull = document.getElementById("emailError"); /*message derreur*/

    /*stockage mail pour affichage dans popup suivante*/
    let userMail = emailuser.value
    let pEmailUser = document.getElementById("enumcourriel"); /*email user paragraphe*/
    pEmailUser.textContent = userMail;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//patern email

    let boxCreate1 = document.getElementById("CreateAccountPaiement"); /*boutton create 3*/
    let boxCreate2 = document.getElementById("CreateAccountPaiement2"); /*boutton create 3*/

    if (inputText.value.match(mailformat)) {
        boxCreate1.style.display = "none";
        boxCreate2.style.display = "block";
        emailnull.style.display = "none";
    }
    else {
        emailnull.style.display = "flex";
    }
}





/*INPUT PASSWORD - AFFICHER LE(S) MOT(S) DE PASSE(S)*/
function Afficher() {
    var input = document.getElementById("password2");
    var input2 = document.getElementById("passwordPaiement2");
    if (input.type === "password") {
        input.type = "text";
    }
    else {
        input.type = "password";
    }
    if (input2.type === "password") {
        input2.type = "text";
    }
    else {
        input2.type = "password";
    }
}
/*INPUT PASSWORD - AFFICHER LE(S) MOT(S) DE PASSE(S)*/


