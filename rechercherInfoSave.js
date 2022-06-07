/*FICHIER JAVA SCRIPT - SAUVEGARDE DE LA RECHERCHE POUR LIEN PAGE BILLETS*/
let buttonSearch = document.getElementById("lignerecherche"); 


buttonSearch.addEventListener("click", () => {
    let departValue = document.getElementById("garedepart"); /*input gare de depart*/
    sessionStorage.setItem("nomGareDeDepart", departValue.value);

    let arriveeValue = document.getElementById("garearrivee"); /*input gare d'arrivee*/
    sessionStorage.setItem("nomGareDeDArrivee", arriveeValue.value);

    let dateValue = document.getElementById("start"); /*input date depart*/
    sessionStorage.setItem("dateDepart", dateValue.value);

    let heureValue = document.getElementById("horraire"); /*input heure*/
    sessionStorage.setItem("heureDepart", heureValue.value);

    let verifLien = 1;
    sessionStorage.setItem("Verification", verifLien);
})