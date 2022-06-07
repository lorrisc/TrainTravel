/*fichier js gerant le type de paiement, affiche les bon fenetres selon le choix de l'utilisateur*/

let visaPaiement = document.getElementById("visaPaiementIcon"); /*paiment par carte de credit visa*/
let paypalPaiement = document.getElementById("paypalPaiementIcon"); /*paiement par paypal*/
let btcPaiement = document.getElementById("btcPaiementIcon"); /*paiement par bitcoin*/

let visaPaimentBox = document.getElementById("visaPaiement"); /*paiement par bitcoin*/


visaPaiement.addEventListener("click", () => {/*bouton paiement par visa cliqué*/
    visaPaimentBox.style.display = "flex";
})

paypalPaiement.addEventListener("click", () => {/*bouton paiement par paypal cliqué*/
    window.open('https://paypal.com', '_blank');//nous pouvez imaginez que le lien est le lien professionnel permettant de directement payer la somme due au vendeur
})

btcPaiement.addEventListener("click", () => {/*bouton paiement par visa cliqué*/
window.open('https://bitcoin.org/fr/', '_blank');//idem

})

let cancelPaiement = document.getElementById("cancelPaiment"); /*paiement par bitcoin*/
let saveCardParagraph = document.getElementById("cardSave"); /*paiement par bitcoin*/
let saveCard = document.getElementById("validateCard"); /*paiement par bitcoin*/

cancelPaiement.addEventListener("click", () => {/*bouton paiement par visa cliqué*/
    visaPaimentBox.style.display = "none";
})

saveCard.addEventListener("click", () => {/*bouton paiement par visa cliqué*/
saveCardParagraph.style.display = "flex";
})