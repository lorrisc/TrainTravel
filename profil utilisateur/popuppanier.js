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
})
/* VISUALISATION DE SON PANIER TRAIN TRAVEL*/
/*SUPPRESSION BILLETS DE SON PANIER*/
let supprbilletpanierbutton = document.getElementById("deletebillet1"); /*paragraphe creer compte*/
let billetpanier = document.getElementById("billet1"); /*article log in*/
supprbilletpanierbutton.addEventListener("click", () => {
    billetpanier.style.display = "none";
})
let supprbilletpanierbutton2 = document.getElementById("deletebillet2"); /*paragraphe creer compte*/
let billetpanier2 = document.getElementById("billet2"); /*article log in*/
supprbilletpanierbutton2.addEventListener("click", () => {
    billetpanier2.style.display = "none";
})
/*SUPPRESSION BILLETS DE SON PANIER*/


/*fonddocument, cancel 100% des popups au click*/
let documentgeneral = document.getElementById("fondcontrasteprofil"); 
documentgeneral.addEventListener("click", () => {
    documentgeneral.style.display = "none"
    panierpopup.style.display = "none"
})