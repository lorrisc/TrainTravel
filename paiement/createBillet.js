/*fichier js recuperant les billets mis au panier et créant les element recapitulatifs des billets*/

let listesBilletsPanier = sessionStorage.getItem("billetsListes");//recuperation des données
console.log(listesBilletsPanier);//resultat

var tab = listesBilletsPanier.split(',');//remise sous tableau
console.log(tab);//affichage du tableau

let nombreBillets = sessionStorage.getItem("nbrBillets");//recuperation du nombre de billet
console.log("Nombre de billets :" + nombreBillets);//resultat

let prixTotal = sessionStorage.getItem("prixTotal");//recuperation du nombre de billet
console.log("Nombre de billets :" + nombreBillets);//resultat
/*
AIDE INDEX:
n0      n1      n2      n3      n4      n5      n6      n7
id      cityTo  nameTo  cityTo  nameTo  prix    date    heure
*/

//bille dans le panier
let tableauidreserv=[];

/*AFFICHAGE DES BILLETS*/
for (let i = 1; i <= nombreBillets; i++) {

    let artBillet = document.createElement('Article');
    artBillet.className = "billetPaiement";
    artBillet.id = tab[0];
    tableauidreserv.push(artBillet.id);//ajout de l'id dans le pannier pour pour payer par la suite

    let recapBillet = document.getElementById("recapBillets");
    recapBillet.appendChild(artBillet);

    //information ville depart arrivee nom gare depart arrivee
    let infoBilletTrain = document.createElement('div');
    infoBilletTrain.className = "billetInfoLocPaiement";
    artBillet.appendChild(infoBilletTrain);


    let cityXNameFrom = document.createElement('p');
    infoBilletTrain.appendChild(cityXNameFrom);
    cityXNameFrom.textContent = tab[1] + " : " + tab[2]


    let cityXNameTo = document.createElement('p');
    infoBilletTrain.appendChild(cityXNameTo);
    cityXNameTo.textContent = tab[3] + " : " + tab[4]


    //information date heure et prix du billet/train
    let infoBilletTrain2 = document.createElement('div');
    infoBilletTrain2.className = "billetInfoDatePrixPaiement";
    artBillet.appendChild(infoBilletTrain2);


    let dateHeures = document.createElement('p');
    infoBilletTrain2.appendChild(dateHeures);
    dateHeures.textContent = tab[6] + " - " + tab[7]


    let priceTicket = document.createElement('p');
    priceTicket.className = "price";
    infoBilletTrain2.appendChild(priceTicket);
    priceTicket.textContent = tab[5] + " €"


    //separation entre billets
    let ligneSeparatrice = document.createElement('div');
    ligneSeparatrice.className = "separation";
    recapBillet.appendChild(ligneSeparatrice);


    //supprime les billets déjà créer du tableau
    for (let j = 1; j < 9; j++) {

        tab.shift();
    }

    //calcul du prix total a payer
    prixTotalPaiement = document.getElementById("prixTot");
    prixTotalPaiement.textContent = prixTotal + " €"

}