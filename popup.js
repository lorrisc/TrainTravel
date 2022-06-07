/* FICHIER JAVA - GESTION POPU UP - TOP CORNER RIGHT - CONNEXION - CREATION COMPTE - PANIER*/



/*fonddocument, cancel 100% des popups au click*/
let documentgeneral = document.getElementById("fondcontraste");
documentgeneral.addEventListener("click", () => {
    let firstname = document.getElementById("firstname"); /*prenom*/
    let surname = document.getElementById("name"); /*nom*/
    let infomanquante = document.getElementById("informationsmanquante"); /*message derreur*/
    let emailnull = document.getElementById("emailnonsaisi"); /*message derreur*/


    loginpopup.style.display = "none";
    documentgeneral.style.display = "none"
    panierpopup.style.display = "none"

    crreatepopup1.style.display = "none"
    crreatepopup2.style.display = "none"
    crreatepopup3.style.display = "none"


    surname.style.border = "2px none red";
    firstname.style.border = "2px none red";
    infomanquante.style.display = "none";
    crreatepopup3.style.height = "480px";

    crreatepopup1.style.height = "270px";
    emailnull.style.display = "none";

    passworddiffent.style.display = "none";
    paternIncorrect.style.display = "none";
    crreatepopup2.style.height = "400px";
})



/* CREATION DE COMPTE TRAIN TRAVEL*/
let createbutton1 = document.getElementById("inscription"); /*boutton s'inscrire*/
let createaccountlink = document.getElementById("createaccountlink"); /*link depuis popup connexion*/

let createbutton2 = document.getElementById("createpopup1"); /*boutton inscription etape 1*/
let createbutton3 = document.getElementById("createpopup2"); /*boutton inscription etape 2*/
let createbutton4 = document.getElementById("createpopup3"); /*boutton inscription etape 3*/

let crreatepopup1 = document.getElementById("flottantcreate1"); /*pop up 1*/
let crreatepopup2 = document.getElementById("flottantcreate2"); /*pop up 2*/
let crreatepopup3 = document.getElementById("flottantcreate3"); /*pop up 3*/

createaccountlink.addEventListener("click", () => {/*pop up creation link from login popup*/
    loginpopup.style.display = "none";
    crreatepopup1.style.display = "block";
})


createbutton1.addEventListener("click", () => {/*bouton principal, etape0 pour s'inscrire*/
    crreatepopup1.style.display = "block";
    documentgeneral.style.display = "block"
    loginpopup.style.display = "none";
    panierpopup.style.display = "none";
})


function ValidateEmail(inputText) {
    let emailuser = document.getElementById("adressemail"); /*email user*/
    let emailnull = document.getElementById("emailnonsaisi"); /*message derreur*/

    /*stockage mail pour affichage dans popup suivante*/
    let userMail = emailuser.value
    let pEmailUser = document.getElementById("enumcourriel"); /*email user paragraphe*/
    pEmailUser.textContent = userMail;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//patern email

    if (inputText.value.match(mailformat)) {
        crreatepopup1.style.display = "none";
        crreatepopup2.style.display = "block";
        crreatepopup1.style.height = "270px";
        emailnull.style.display = "none";
    }
    else {
        crreatepopup1.style.height = "312px";
        emailnull.style.display = "flex";
    }
}
// createbutton2.addEventListener("click", () => {/*bouton après definiton du mail*/
//     let emailuser = document.getElementById("adressemail"); /*email user*/
//     let emailnull = document.getElementById("emailnonsaisi"); /*message derreur*/

//     /*stockage mail pour affichage dans popup suivante*/
//     let userMail = emailuser.value
//     let pEmailUser = document.getElementById("enumcourriel"); /*email user paragraphe*/
//     pEmailUser.textContent = userMail;

//     if (emailuser.value == "") {//error message, no mail
//         crreatepopup1.style.height = "312px";
//         emailnull.style.display = "flex";
//     }
//     else {//affichage popup création compte suivante
//         crreatepopup1.style.display = "none";
//         crreatepopup2.style.display = "block";
//         crreatepopup1.style.height = "270px";
//         emailnull.style.display = "none";
//     }
// })
createbutton3.addEventListener("click", () => {/*bouton apres definiton du mot de passe*/
    let pass1value = document.getElementById("password1"); /*password1*/
    let pass2value = document.getElementById("password2"); /*password2*/
    let passworddiffent = document.getElementById("passworddiffent"); /*message derreur*/
    let paternIncorrect = document.getElementById("patternmauvais"); /*message derreur*/

    var patternpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$/;
    paternIncorrect.style.display="none";
    if (password1.value.match(patternpassword)) {

        if (password1.value != password2.value) {//verification same password
            console.log("mot de passe différent")
            passworddiffent.style.display = "flex";
            crreatepopup2.style.height = "448px";
        }
        else {//affichage popup création compte suivante
            crreatepopup2.style.display = "none";
            crreatepopup3.style.display = "block";
            passworddiffent.style.display = "none";
            crreatepopup2.style.height = "400px";
        }
    }
    else{
        paternIncorrect.style.display="flex";
        crreatepopup2.style.height = "460px";
    }

})
createbutton4.addEventListener("click", () => {/*bouton final creation*/
    let firstname = document.getElementById("firstname"); /*prenom*/
    let surname = document.getElementById("name"); /*nom*/
    let infomanquante = document.getElementById("informationsmanquante"); /*message derreur*/

    if (firstname.value == "") {//error message firsname empty
        firstname.style.border = "2px solid red";
        infomanquante.style.display = "flex";
    }
    if (surname.value == "") {//error message surname empty
        surname.style.border = "2px solid red";
        infomanquante.style.display = "flex";
        crreatepopup3.style.height = "522px";
    }
    else {//account create, close popup
        crreatepopup3.style.display = "none";
        documentgeneral.style.display = "none"
        surname.style.border = "2px none red";
        firstname.style.border = "2px none red";
        infomanquante.style.display = "none";
        crreatepopup3.style.height = "480px";
    }
})

/* CREATION DE COMPTE TRAIN TRAVEL*/



/* CONNEXION A UN COMPTE TRAIN TRAVEL*/
let loginbutton1 = document.getElementById("connexion"); /*boutton se connecter*/
let cancellogin = document.getElementById("cancel"); /*boutton annuler connexion*/

let loginpopup = document.getElementById("flottantlogin"); /*pop up connexion*/

loginbutton1.addEventListener("click", () => {
    loginpopup.style.display = "flex";
    documentgeneral.style.display = "block"

    crreatepopup1.style.display = "none"
    crreatepopup2.style.display = "none"
    crreatepopup3.style.display = "none"
    panierpopup.style.display = "none";
})

cancellogin.addEventListener("click", () => {
    loginpopup.style.display = "none";
    documentgeneral.style.display = "none"
})
/* CONNEXION A UN COMPTE TRAIN TRAVEL*/


/* VISUALISATION DE SON PANIER TRAIN TRAVEL*/
let panierbutton = document.getElementById("panier"); /*boutton panier*/
let panierpopup = document.getElementById("panierpopup"); /*pop up panier*/

panierbutton.addEventListener("click", () => {
    panierpopup.style.display = "flex";
    documentgeneral.style.display = "block"

    crreatepopup1.style.display = "none"
    crreatepopup2.style.display = "none"
    crreatepopup3.style.display = "none"
    loginpopup.style.display = "none"

    // let prixTotalPanier = document.getElementById("totalPanier");
    // prixTotalPanier.textContent = prixTot + " €";
})

/* VISUALISATION DE SON PANIER TRAIN TRAVEL*/
/*SUPPRESSION BILLETS DE SON PANIER*/
// let supprbilletpanierbutton = document.getElementById("deletebillet");
// let azze = document.getElementById("billet2");


// supprbilletpanierbutton.addEventListener("click", () => {
//     azze.style.display="none";
// })

// let supprbilletpanierbutton2 = document.getElementById("deletebillet2"); /*paragraphe creer compte*/
// let billetpanier2 = document.getElementById("billet2"); /*article log in*/
// supprbilletpanierbutton2.addEventListener("click", () => {
//     billetpanier2.style.display = "none";
// })
/*SUPPRESSION BILLETS DE SON PANIER*/



/*INPUT PASSWORD - AFFICHER LE(S) MOT(S) DE PASSE(S)*/
function Afficher() {
    var input = document.getElementById("password1");
    var input2 = document.getElementById("password2");
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




/*NOMBRE PASSAGER*/
/*0-3 ans*/
let moins03 = document.getElementById("moins0-3"); /*bouton moins*/
let value03 = document.getElementById("0-3value"); /*nombre passager*/
let plus03 = document.getElementById("plus0-3"); /*bouton plus*/

let value03var = 0;

moins03.addEventListener("click", () => {//bouton moins cliquer
    value03var--;//décrémentation compteur
    value03.textContent = value03var;//modification text

    //Verification nombre de passager non inférieur à 0
    if (value03var < 0) {
        value03var = 0;
        value03.textContent = value03var;
    }
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
plus03.addEventListener("click", () => {//bouton plus cliquer
    value03var++;
    value03.textContent = value03var;

    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})

/*4-15 ans*/
let moins415 = document.getElementById("moins4-15"); /*bouton moins*/
let value415 = document.getElementById("4-15value"); /*nombre passager*/
let plus415 = document.getElementById("plus4-15"); /*bouton plus*/

let value415var = 0;
moins415.addEventListener("click", () => {//bouton moins cliquer
    value415var--;//décrémentation compteur
    value415.textContent = value415var;//modification text

    //Verification nombre de passager non inférieur à 0
    if (value415var < 0) {
        value415var = 0;
        value415.textContent = value415var;
    }
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
plus415.addEventListener("click", () => {//bouton plus cliquer
    value415var++;
    value415.textContent = value415var;
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
/*16-29 ans*/
let moins1629 = document.getElementById("moins16-29"); /*bouton moins*/
let value1629 = document.getElementById("16-29value"); /*nombre passager*/
let plus1629 = document.getElementById("plus16-29"); /*bouton plus*/

let value1629var = 0;
moins1629.addEventListener("click", () => {//bouton moins cliquer
    value1629var--;//décrémentation compteur
    value1629.textContent = value1629var;//modification text

    //Verification nombre de passager non inférieur à 0
    if (value1629var < 0) {
        value1629var = 0;
        value1629.textContent = value1629var;
    }
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
plus1629.addEventListener("click", () => {//bouton plus cliquer
    value1629var++;
    value1629.textContent = value1629var;
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);
    
})
/*30-59 ans*/
let moins3059 = document.getElementById("moins30-59"); /*bouton moins*/
let value3059 = document.getElementById("30-59value"); /*nombre passager*/
let plus3059 = document.getElementById("plus30-59"); /*bouton plus*/

let value3059var = 0;
moins3059.addEventListener("click", () => {//bouton moins cliquer
    value3059var--;//décrémentation compteur
    value3059.textContent = value3059var;//modification text

    //Verification nombre de passager non inférieur à 0
    if (value3059var < 0) {
        value3059var = 0;
        value3059.textContent = value3059var;
        
    }
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
plus3059.addEventListener("click", () => {//bouton plus cliquer
    value3059var++;
    value3059.textContent = value3059var;
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
/*60+ ans*/
let moins60 = document.getElementById("moins60+"); /*bouton moins*/
let value60 = document.getElementById("60+value"); /*nombre passager*/
let plus60 = document.getElementById("plus60+"); /*bouton plus*/

let value60var = 0;
moins60.addEventListener("click", () => {//bouton moins cliquer
    value60var--;//décrémentation compteur
    value60.textContent = value60var;//modification text

    //Verification nombre de passager non inférieur à 0
    if (value60var < 0) {
        value60var = 0;
        value60.textContent = value60var;
    }
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})
plus60.addEventListener("click", () => {//bouton plus cliquer
    value60var++;
    value60.textContent = value60var;
    sessionStorage.setItem('totPassager', value03var+value415var+value60var+value3059var+value1629var);

})


