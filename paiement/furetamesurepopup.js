/*js permettant d'afficher au fur et a mesure les formulaires*/


//information personnelle
let buttonValidInfoperso = document.getElementById("validateFormInfoPerso");

//input
let surname = document.getElementById("namePaiement");
let firstame = document.getElementById("prenomPaiement");
let courriel = document.getElementById("courreilPaiement");

//message derreur
let infoPersoManquante = document.getElementById("infoPersoManquante");
let infoAdressManquante = document.getElementById("infoAdressManquante");

//popup
let infoAdressPopup = document.getElementById("AdressePaiement");
let typepaimentPopup = document.getElementById("typePaiement");
let buuttonfinaldiv = document.getElementById("paiementFinalValidation");


buttonValidInfoperso.addEventListener("click", () => {/*bouton continuer creation 3 cliqué*/
    if ((surname.value=="")||(firstame.value=="")||(courriel.value=="")){
        console.log("veuillez rentrer vos informations personnel")
        infoPersoManquante.style.display="flex";
    }
    else{
        //afficher popupsuivante
        infoPersoManquante.style.display="none";
        infoAdressPopup.style.display="flex";
    }
})



//information personnelle
let buttonValidAdress = document.getElementById("validateFormAdresse");

//input
let numRueForm = document.getElementById("numRue");
let nomRueForm = document.getElementById("nomRue");
let villeForm = document.getElementById("ville");
let cpForm = document.getElementById("cp");


buttonValidAdress.addEventListener("click", () => {/*bouton continuer creation 3 cliqué*/
    if ((numRueForm.value=="")||(nomRueForm.value=="")||(villeForm.value=="")||(cpForm.value=="")){
        console.log("veuillez rentrer vos informations personnel")
        infoAdressManquante.style.display="flex";
    }
    else{
        //afficher popupsuivante
        infoAdressManquante.style.display="none";
        typepaimentPopup.style.display="flex";
        buuttonfinaldiv.style.display="flex";


    }
})