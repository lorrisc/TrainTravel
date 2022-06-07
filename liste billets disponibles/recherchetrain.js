let buttonSearch = document.getElementById("lignerecherche"); /*boutton rechercher train (formulaire)*/
let nombrebillets = 0;


let billetAPayer = []//tableau relatif au paiement

var tablInfoTickets = [];//tableau stockant les données des différents billets

//Cela permet d'y avoir accès plus tard notamment utile pour le panier. Il aurai été plus simple de seulement stocké l'id du billet de train dans un id ou peu importe sur le billet, accesible plus tard, mais me semble t-il pas de requetes vers le serveur permettant de recuperer les valeurs d'un billets avec seulement un id. Du moins pas précisé dans le sujet de TP. La solution de tableau me semble une bon alternative.



/*Acquisition des données du formulaire sauvegardé (fichier: rechercheInfoSave.js)*/
let gareDepart = sessionStorage.getItem("nomGareDeDepart");
console.log(gareDepart)
let gareArrivee = sessionStorage.getItem("nomGareDeDArrivee");
console.log(gareArrivee)
let dateDepart = sessionStorage.getItem("dateDepart");
console.log(dateDepart)
let heureDepart = sessionStorage.getItem("heureDepart");
console.log(heureDepart)
let verif = sessionStorage.getItem("Verification");
console.log(verif)

if (verif == 1) {//permet d'executer si seulement lutilisateur viens de lancer une recherche via la page principal'
    verif = 0;
    let alert0TrainDispo = document.getElementById("alert0TrainDispo"); /*boutton déconnexion*/
    alert0TrainDispo.style.display = "none";

    let serviceIndisponible = document.getElementById("serviceIndisponible"); /*boutton déconnexion*/
    serviceIndisponible.style.display = "none";

    let alertSaisi = document.getElementById("alertSaisi"); /*boutton déconnexion*/
    alertSaisi.style.display = "none";

    let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
    articleformulaire.style.height = "300px";



    fetch('http://gigondas:1111/sprietna/ihm/tp4/cities').then(response => {
        if (response.ok) {
            console.log("cities load")
            return response.json()
        } else {
            throw response

        }
    }).then(cities => {



        console.log(cities);

        let cityFromId = 0;
        let cityToId = 0;
        let i = 0;//var incrementation

        //id ville depart user, via donnée rempli formulaire
        while (cities[i].name != gareDepart) {
            i++;
        }
        if (cities[i].name == gareDepart) {
            console.log("id ville départ : " + cities[i].id)
            cityFromId = cities[i].id
        }

        i = 0;

        //id ville arrivee user, via donnée rempli formulaire
        inputArrivalValue = document.getElementById("garearrivee"); /*valeur input ville arrivée*/
        while (cities[i].name != gareArrivee) {
            i++;
        }
        if (cities[i].name == gareArrivee) {
            console.log("id ville arrivée : " + cities[i].id)
            cityToId = cities[i].id
        }


        //Rechercher billets train
        fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=' + cityFromId + '&cityTo=' + cityToId + '&date=' + dateDepart + '&timeFrom=' + heureDepart).then(response => {
            /*fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=10&cityTo=3&date=2022-05-12').then(response => {*/
            if (response.ok) {
                return response.json()
            } else {
                throw response
            }
        }).then(schedules => {
            console.log(schedules)
            console.log("la longueur est de" + schedules.length)
            nombrebillets = schedules.length

            if (schedules.length == 0) {
                let alert0TrainDispo = document.getElementById("alert0TrainDispo"); /*boutton déconnexion*/
                alert0TrainDispo.style.display = "flex";
                let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
                articleformulaire.style.height = "468px";
            }

            for (let i = 0; i < schedules.length; i++) {
                //tableau contenant chaque informations des billets chargé, pour pouvoir les récupérer pour l'ajout dans le panier. 
                //Méthode plus cohérente: tableau a plusieurs entrée, à revoir si possible (tentative non réussi dans un 1er temps)
                tablInfoTickets.push(schedules[i].id, schedules[i].date, schedules[i].departureTime, schedules[i].price, schedules[i].travel.duration, schedules[i].travel.from.city, schedules[i].travel.from.cityId, schedules[i].travel.from.id, schedules[i].travel.from.name, schedules[i].travel.id, schedules[i].travel.to.city, schedules[i].travel.to.cityId, schedules[i].travel.to.id, schedules[i].travel.to.name, schedules[i].travel.type);



                let articlebillet = document.createElement('Article');
                articlebillet.className = "choixbillets";
                articlebillet.id = "choixbillets";
                //articlebillet.id = schedules[i].id;//train identified by its id

                let principalpage = document.getElementById("ticketuserparts");
                principalpage.appendChild(articlebillet);


                let informationstrain = document.createElement('div');
                informationstrain.className = "infotrain";
                articlebillet.appendChild(informationstrain);

                /*information billet gare de depart*/
                let departtrain = document.createElement('div');
                departtrain.className = "departtrain";
                informationstrain.appendChild(departtrain);

                let heuretrain = document.createElement("p");
                heuretrain.className = "heuretrain";
                departtrain.appendChild(heuretrain);
                heuretrain.textContent = schedules[i].departureTime;

                let detailgared = document.createElement('div');
                detailgared.className = "detailgaredepart";
                departtrain.appendChild(detailgared);


                let gared = document.createElement("p");
                gared.className = "clairptrain";
                detailgared.appendChild(gared);
                gared.textContent = schedules[i].travel.from.city + ": " + schedules[i].travel.from.name;


                /*information billet gare d'arrivée*/
                let retourtrain = document.createElement('div');
                retourtrain.className = "arriveetrain";
                informationstrain.appendChild(retourtrain);

                /*heure d'arrivée non précisé, calcul nous semble t-il pas possible donc affichage du temps a ajouter a l'heure de départ*/
                let heuretraina = document.createElement("p");
                heuretraina.className = "heuretrain";
                retourtrain.appendChild(heuretraina);
                heuretraina.textContent = "+" + schedules[i].travel.duration + "min";


                let detailgarea = document.createElement('div');
                detailgarea.className = "detailgarearrivee";
                retourtrain.appendChild(detailgarea);

                let garer = document.createElement("p");
                garer.className = "clairptrain";
                detailgarea.appendChild(garer);
                garer.textContent = schedules[i].travel.to.city + ": " + schedules[i].travel.to.name;

                /*information secondaire train billet*/
                let infosecondaire = document.createElement('div');
                infosecondaire.className = "infosecondaire";
                informationstrain.appendChild(infosecondaire);

                let dureetype = document.createElement("p");
                dureetype.className = "clairptrain";
                infosecondaire.appendChild(dureetype);
                dureetype.textContent = schedules[i].travel.duration + " min - " + schedules[i].travel.type + " - le: " + schedules[i].date;

                let bouttonfavori = document.createElement('div');
                bouttonfavori.className = "favoributton";
                infosecondaire.appendChild(bouttonfavori);

                let paragrapheaddfavori = document.createElement("p");
                bouttonfavori.appendChild(paragrapheaddfavori);
                paragrapheaddfavori.textContent = "Ajouter ce trajet en favori";


                /*information classe seconde billet*/
                let infoseconde = document.createElement('div');
                infoseconde.className = "info2nd";
                infoseconde.id = "info2nd";
                articlebillet.appendChild(infoseconde);

                let paratypeclasse = document.createElement('p');
                paratypeclasse.className = "nomclassetrain";
                infoseconde.appendChild(paratypeclasse);
                paratypeclasse.textContent = "2nde classe";


                let prixtrain2nde = document.createElement('div');
                prixtrain2nde.className = "prixtrain";
                infoseconde.appendChild(prixtrain2nde);

                let paraprix2nde = document.createElement('p');
                prixtrain2nde.appendChild(paraprix2nde);
                paraprix2nde.textContent = "Dès " + schedules[i].price + " €";


                let divaddpanier = document.createElement('div');
                divaddpanier.className = "addpanier";
                infoseconde.appendChild(divaddpanier);
                divaddpanier.id = schedules[i].id;
                divaddpanier.onclick = addPanierClick;

                let paraadpanier = document.createElement('p');
                divaddpanier.appendChild(paraadpanier);
                paraadpanier.textContent = "Ajouter au panier";
                //paraadpanier.onclick=addPanierClick;


                let divplacedispo = document.createElement('div');
                divplacedispo.className = "placedispo";
                infoseconde.appendChild(divplacedispo);

                let paraplacedispo = document.createElement('p');
                divplacedispo.appendChild(paraplacedispo);
                paraplacedispo.textContent = "X places disponible";

                /*information classe premiere billet*/
                let infopremiere = document.createElement('div');
                infopremiere.className = "info1ere";
                articlebillet.appendChild(infopremiere);

                let paratypeclasse1 = document.createElement('p');
                paratypeclasse1.className = "nomclassetrain";
                infopremiere.appendChild(paratypeclasse1);
                paratypeclasse1.textContent = "1ere classe";


                let prixtrain1ere = document.createElement('div');
                prixtrain1ere.className = "prixtrain";
                infopremiere.appendChild(prixtrain1ere);

                /*Le prix en fonction du type de classes (seconde et première)n'étant pas disponible nous avons multiplié le prix de base par 30% pour avoir le prix de la première class, 30% représente juste une valeur supérieur permettant d'avoir une valeur cohérente, mais c'est un prix éviement faussé.*/
                let paraprix1ere = document.createElement('p');
                prixtrain1ere.appendChild(paraprix1ere);
                paraprix1ere.textContent = "Dès " + Math.round(schedules[i].price * 1.35) + " €";


                let divaddpanier1 = document.createElement('div');
                divaddpanier1.className = "addpanier2";
                infopremiere.appendChild(divaddpanier1);
                divaddpanier1.id = schedules[i].id;
                divaddpanier1.onclick = addPanierClick;


                let paraadpanier1 = document.createElement('p');
                divaddpanier1.appendChild(paraadpanier1);
                paraadpanier1.textContent = "Ajouter au panier";


                let divplacedispo1 = document.createElement('div');
                divplacedispo1.className = "placedispo";
                infopremiere.appendChild(divplacedispo1);

                let paraplacedispo1 = document.createElement('p');
                divplacedispo1.appendChild(paraplacedispo1);
                paraplacedispo1.textContent = "X places disponible";

            }





        }).catch(error => {

            let serviceIndisponible = document.getElementById("serviceIndisponible"); /*boutton déconnexion*/
            serviceIndisponible.style.display = "flex";
            let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
            articleformulaire.style.height = "468px";
            console.log('Request failed : ');

        })


    }).catch(error => {
        let alertSaisi = document.getElementById("alertSaisi"); /*boutton déconnexion*/
        alertSaisi.style.display = "flex";
        let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
        articleformulaire.style.height = "468px";





    });
}























buttonSearch.addEventListener("click", () => {

    let alert0TrainDispo = document.getElementById("alert0TrainDispo"); /*boutton déconnexion*/
    alert0TrainDispo.style.display = "none";

    let serviceIndisponible = document.getElementById("serviceIndisponible"); /*boutton déconnexion*/
    serviceIndisponible.style.display = "none";

    let alertSaisi = document.getElementById("alertSaisi"); /*boutton déconnexion*/
    alertSaisi.style.display = "none";

    let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
    articleformulaire.style.height = "300px";



    fetch('http://gigondas:1111/sprietna/ihm/tp4/cities').then(response => {
        if (response.ok) {
            console.log("cities load")
            return response.json()
        } else {
            throw response

        }
    }).then(cities => {



        console.log(cities);

        let cityFromId = 0;
        let cityToId = 0;
        let i = 0;//var incrementation

        //id ville depart user, via donnée rempli formulaire
        inputDepartureValue = document.getElementById("garedepart"); /*valeur input ville depart*/
        while (cities[i].name != inputDepartureValue.value) {
            i++;
        }
        if (cities[i].name == inputDepartureValue.value) {
            console.log("id ville départ : " + cities[i].id)
            cityFromId = cities[i].id
        }

        i = 0;

        //id ville arrivee user, via donnée rempli formulaire
        inputArrivalValue = document.getElementById("garearrivee"); /*valeur input ville arrivée*/
        while (cities[i].name != inputArrivalValue.value) {
            i++;
        }
        if (cities[i].name == inputArrivalValue.value) {
            console.log("id ville arrivée : " + cities[i].id)
            cityToId = cities[i].id
        }
        //date depart user, via donnée rempli formulaire
        let dateStart = 0;
        dateStart = document.getElementById("start").value; /*valeur input ville arrivée*/
        //heure depart user, via donnée rempli formulaire
        let horraireStart = 0;
        horraireStart = document.getElementById("horraire").value; /*valeur input ville arrivée*/
        console.log(horraireStart)


        //Rechercher billets train
        fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=' + cityFromId + '&cityTo=' + cityToId + '&date=' + dateStart + '&timeFrom=' + horraireStart).then(response => {
            /*fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=10&cityTo=3&date=2022-05-12').then(response => {*/
            if (response.ok) {
                return response.json()
            } else {
                throw response
            }
        }).then(schedules => {
            console.log(schedules)
            console.log("la longueur est de" + schedules.length)
            nombrebillets = schedules.length

            if (schedules.length == 0) {
                let alert0TrainDispo = document.getElementById("alert0TrainDispo"); /*boutton déconnexion*/
                alert0TrainDispo.style.display = "flex";
                let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
                articleformulaire.style.height = "468px";
            }


            for (let i = 0; i < schedules.length; i++) {

                //tableau contenant chaque informations des billets chargé, pour pouvoir les récupérer pour l'ajout dans le panier. 
                //Méthode plus cohérente: tableau a plusieurs entrée, à revoir si possible (tentative non réussi dans un 1er temps)
                tablInfoTickets.push(schedules[i].id, schedules[i].date, schedules[i].departureTime, schedules[i].price, schedules[i].travel.duration, schedules[i].travel.from.city, schedules[i].travel.from.cityId, schedules[i].travel.from.id, schedules[i].travel.from.name, schedules[i].travel.id, schedules[i].travel.to.city, schedules[i].travel.to.cityId, schedules[i].travel.to.id, schedules[i].travel.to.name, schedules[i].travel.type);




                let articlebillet = document.createElement('Article');
                articlebillet.className = "choixbillets";
                articlebillet.id = "choixbillets";
                //articlebillet.id = schedules[i].id;//train identified by its id

                let principalpage = document.getElementById("ticketuserparts");
                principalpage.appendChild(articlebillet);


                let informationstrain = document.createElement('div');
                informationstrain.className = "infotrain";
                articlebillet.appendChild(informationstrain);

                /*information billet gare de depart*/
                let departtrain = document.createElement('div');
                departtrain.className = "departtrain";
                informationstrain.appendChild(departtrain);

                let heuretrain = document.createElement("p");
                heuretrain.className = "heuretrain";
                departtrain.appendChild(heuretrain);
                heuretrain.textContent = schedules[i].departureTime;

                let detailgared = document.createElement('div');
                detailgared.className = "detailgaredepart";
                departtrain.appendChild(detailgared);


                let gared = document.createElement("p");
                gared.className = "clairptrain";
                detailgared.appendChild(gared);
                gared.textContent = schedules[i].travel.from.city + ": " + schedules[i].travel.from.name;


                /*information billet gare d'arrivée*/
                let retourtrain = document.createElement('div');
                retourtrain.className = "arriveetrain";
                informationstrain.appendChild(retourtrain);

                /*heure d'arrivée non précisé, calcul nous semble t-il pas possible donc affichage du temps a ajouter a l'heure de départ*/
                let heuretraina = document.createElement("p");
                heuretraina.className = "heuretrain";
                retourtrain.appendChild(heuretraina);
                heuretraina.textContent = "+" + schedules[i].travel.duration + "min";


                let detailgarea = document.createElement('div');
                detailgarea.className = "detailgarearrivee";
                retourtrain.appendChild(detailgarea);

                let garer = document.createElement("p");
                garer.className = "clairptrain";
                detailgarea.appendChild(garer);
                garer.textContent = schedules[i].travel.to.city + ": " + schedules[i].travel.to.name;

                /*information secondaire train billet*/
                let infosecondaire = document.createElement('div');
                infosecondaire.className = "infosecondaire";
                informationstrain.appendChild(infosecondaire);

                let dureetype = document.createElement("p");
                dureetype.className = "clairptrain";
                infosecondaire.appendChild(dureetype);
                dureetype.textContent = schedules[i].travel.duration + " min - " + schedules[i].travel.type + " - le: " + schedules[i].date;

                let bouttonfavori = document.createElement('div');
                bouttonfavori.className = "favoributton";
                infosecondaire.appendChild(bouttonfavori);

                let paragrapheaddfavori = document.createElement("p");
                bouttonfavori.appendChild(paragrapheaddfavori);
                paragrapheaddfavori.textContent = "Ajouter ce trajet en favori";


                /*information classe seconde billet*/
                let infoseconde = document.createElement('div');
                infoseconde.className = "info2nd";
                articlebillet.appendChild(infoseconde);

                let paratypeclasse = document.createElement('p');
                paratypeclasse.className = "nomclassetrain";
                infoseconde.appendChild(paratypeclasse);
                paratypeclasse.textContent = "2nde classe";


                let prixtrain2nde = document.createElement('div');
                prixtrain2nde.className = "prixtrain";
                infoseconde.appendChild(prixtrain2nde);

                let paraprix2nde = document.createElement('p');
                prixtrain2nde.appendChild(paraprix2nde);
                paraprix2nde.textContent = "Dès " + schedules[i].price + " €";


                let divaddpanier = document.createElement('div');
                divaddpanier.className = "addpanier";
                infoseconde.appendChild(divaddpanier);
                divaddpanier.id = schedules[i].id;
                //console.log(divaddpanier.id);
                divaddpanier.onclick = addPanierClick;

                let paraadpanier = document.createElement('p');
                divaddpanier.appendChild(paraadpanier);
                paraadpanier.textContent = "Ajouter au panier";



                let divplacedispo = document.createElement('div');
                divplacedispo.className = "placedispo";
                infoseconde.appendChild(divplacedispo);

                let paraplacedispo = document.createElement('p');
                divplacedispo.appendChild(paraplacedispo);
                paraplacedispo.textContent = "X places disponible";

                /*information classe premiere billet*/
                let infopremiere = document.createElement('div');
                infopremiere.className = "info1ere";
                articlebillet.appendChild(infopremiere);

                let paratypeclasse1 = document.createElement('p');
                paratypeclasse1.className = "nomclassetrain";
                infopremiere.appendChild(paratypeclasse1);
                paratypeclasse1.textContent = "1ere classe";


                let prixtrain1ere = document.createElement('div');
                prixtrain1ere.className = "prixtrain";
                infopremiere.appendChild(prixtrain1ere);

                /*Le prix en fonction du type de classes (seconde et première)n'étant pas disponible nous avons multiplié le prix de base par 30% pour avoir le prix de la première class, 30% représente juste une valeur supérieur permettant d'avoir une valeur cohérente, mais c'est un prix éviement faussé.*/
                let paraprix1ere = document.createElement('p');
                prixtrain1ere.appendChild(paraprix1ere);
                paraprix1ere.textContent = "Dès " + Math.round(schedules[i].price * 1.35) + " €";


                let divaddpanier1 = document.createElement('div');
                divaddpanier1.className = "addpanier2";
                infopremiere.appendChild(divaddpanier1);
                divaddpanier1.id = schedules[i].id;
                divaddpanier1.onclick = addPanierClick;

                let paraadpanier1 = document.createElement('p');
                divaddpanier1.appendChild(paraadpanier1);
                paraadpanier1.textContent = "Ajouter au panier";


                let divplacedispo1 = document.createElement('div');
                divplacedispo1.className = "placedispo";
                infopremiere.appendChild(divplacedispo1);

                let paraplacedispo1 = document.createElement('p');
                divplacedispo1.appendChild(paraplacedispo1);
                paraplacedispo1.textContent = "X places disponible";

            }





        }).catch(error => {

            let serviceIndisponible = document.getElementById("serviceIndisponible"); /*boutton déconnexion*/
            serviceIndisponible.style.display = "flex";
            let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
            articleformulaire.style.height = "468px";
            console.log('Request failed : ' + errorMessage);

        })


    }).catch(error => {
        let alertSaisi = document.getElementById("alertSaisi"); /*boutton déconnexion*/
        alertSaisi.style.display = "flex";
        let articleformulaire = document.getElementById("formulairerecherche2"); /*formulaire*/
        articleformulaire.style.height = "468px";





    });

})



/*fonction suppression billets déjà affiché, recherche précédente*/
function GFG_click() {
    let compteurBoucle = 0;
    while (compteurBoucle < nombrebillets) {
        var gfg_down = document.getElementById("choixbillets");
        gfg_down.remove();
        compteurBoucle++;
    }
}


//fonction boutton ajouter au panier cliqué 
//(gère la mise du billet choisi dans la panier)
let prixTot = 0;
let compteurPanier = 0;

function addPanierClick() {
    let warningNoTicket = document.querySelector('#panierVide');
    warningNoTicket.style.display="none";


    var idTicketsNoParse = this.id;//id du billet présent dans l'id du bouton addpanier
    var classButtonAdd = this.className;//recup class pour savoir si eco ou premiere
    let classPremiere = "addpanier2";
    var idTickets = parseInt(idTicketsNoParse);//convert string to int


    console.log("Ticket n°" + idTickets + " ajouté au panier");//info console id billets

    //console.log(tablInfoTickets)

    //console.log(tablInfoTickets.indexOf(idTickets));//index de l'id dans le tableau des billets
    indexBillet = tablInfoTickets.indexOf(idTickets);//stocke l'index dans le tableau

    //stockage des informations relatif au billets selectionné nécessaire
    let dateTickets = tablInfoTickets[indexBillet + 1]//date
    let departureTimeTickets = tablInfoTickets[indexBillet + 2]//heure
    let priceTickets = tablInfoTickets[indexBillet + 3]//prix
    let cityFromTickets = tablInfoTickets[indexBillet + 5]//ville depart
    let nameFromTickets = tablInfoTickets[indexBillet + 8]//nom gare depart
    let cityToTickets = tablInfoTickets[indexBillet + 10]//ville arrivéee
    let nameToTickets = tablInfoTickets[indexBillet + 13]//nom ville arrivée

    var priceTicketsInt = parseFloat(priceTickets);//convert string to float

    if (classButtonAdd == classPremiere) {
        priceTicketsInt = Math.round(priceTickets * 1.35);
    }

    //VERIF CONSOLE VALUE
    // console.log(dateTickets)
    // console.log(departureTimeTickets)
    // console.log(priceTickets)
    // console.log(cityFromTickets)
    // console.log(nameFromTickets)
    // console.log(cityToTickets)
    // console.log(nameToTickets)



    //CREATION ET INSERTION DES BILLETS DANS LE PANIER (POP UP)

    //article billet ajouté
    let articleBilletP = document.createElement('Article');
    articleBilletP.className = "billetspanier";
    articleBilletP.id = "billet2";

    let popuppanier = document.getElementById("panierpopup");
    let lastChildPanier = document.getElementById("footerpanier");
    popuppanier.insertBefore(articleBilletP, lastChildPanier);//insére entre le top et le footer du panier


    //PREMIERE PARTIE DU BILLET
    let line1Panier = document.createElement('div');
    line1Panier.className = "line1pannier";
    articleBilletP.appendChild(line1Panier);

    //ville et gare départ
    let line1Panier1 = document.createElement('div');
    line1Panier1.className = "departarrivepaniertrain";
    line1Panier.appendChild(line1Panier1);

    let villeDepartP = document.createElement('h3');
    line1Panier1.appendChild(villeDepartP);
    villeDepartP.textContent = cityFromTickets;

    let gareDepartP = document.createElement('p');
    line1Panier1.appendChild(gareDepartP);
    gareDepartP.textContent = nameFromTickets;

    //ville et gare arrivée
    let line1Panier2 = document.createElement('div');
    line1Panier2.className = "departarrivepaniertrain";
    line1Panier.appendChild(line1Panier2);

    let villeDepartP2 = document.createElement('h3');
    line1Panier2.appendChild(villeDepartP2);
    villeDepartP2.textContent = cityToTickets;

    let gareDepartP2 = document.createElement('p');
    line1Panier2.appendChild(gareDepartP2);
    gareDepartP2.textContent = nameToTickets;

    //prix billet, delete billet
    let line1Panier3 = document.createElement('div');
    line1Panier3.className = "prixtrainxx";
    line1Panier.appendChild(line1Panier3);

    let prixTicket = document.createElement('h3');
    line1Panier3.appendChild(prixTicket);
    prixTicket.textContent = priceTicketsInt + " €";

    let imgDelete = document.createElement('img');
    line1Panier3.appendChild(imgDelete);
    imgDelete.src = "../assets/icons/croix.png";
    imgDelete.id = "deletebillet";
    imgDelete.alt = "icone croix rouge supprimé billet";


    //DEUXIEME PARTIE DU BILLET
    let BilletP2 = document.createElement('div');
    BilletP2.className = "line2pannier";

    articleBilletP.appendChild(BilletP2);


    //première colonne ligne 2
    let line2Panier = document.createElement('div');
    line2Panier.className = "colonnel2";
    BilletP2.appendChild(line2Panier);

    let line2PPDepart = document.createElement('p');
    line2PPDepart.textContent = "Départ";
    line2Panier.appendChild(line2PPDepart);

    //div img, date et heure
    let line2PDepart = document.createElement('div');
    line2PDepart.className = "rectanglecolone"
    line2Panier.appendChild(line2PDepart);

    //img
    let imgCalendar = document.createElement('img');
    line2PDepart.appendChild(imgCalendar);
    imgCalendar.src = "../assets/icons/calendar.png";
    imgCalendar.alt = "icone calendrier";

    //date heure depart
    let pDateHeure = document.createElement('p');
    line2PDepart.appendChild(pDateHeure);
    pDateHeure.textContent = dateTickets + " - " + departureTimeTickets;


    //deuxieme colonne ligne 2
    let line2Panier2 = document.createElement('div');
    line2Panier2.className = "colonnel2";
    BilletP2.appendChild(line2Panier2);

    let line2PPDepart2 = document.createElement('p');
    line2PPDepart2.textContent = "Voyageurs";
    line2Panier2.appendChild(line2PPDepart2);

    //div img, nbr et type voyageur
    let line2PDepart2 = document.createElement('div');
    line2PDepart2.className = "rectanglecolone"
    line2Panier2.appendChild(line2PDepart2);

    //img
    let imgMembers2 = document.createElement('img');
    line2PDepart2.appendChild(imgMembers2);
    imgMembers2.src = "../assets/icons/members.png";
    imgMembers2.alt = "icone membre";

    //type et nombre voyageur
    let pNbrTypeVoyageur = document.createElement('p');
    line2PDepart2.appendChild(pNbrTypeVoyageur);
    if (sessionStorage.getItem('totPassager') != 0){
        pNbrTypeVoyageur.textContent = sessionStorage.getItem('totPassager') + " voyageurs";
    }
    else{
        pNbrTypeVoyageur.textContent = value03var + value415var + value1629var + value3059var + value60var + " voyageurs";
    }

    //troisieme colonne ligne 2
    let line2Panier3 = document.createElement('div');
    line2Panier3.className = "colonnel2";
    BilletP2.appendChild(line2Panier3);

    let line2PPDepart3 = document.createElement('p');
    line2PPDepart3.textContent = "Classe";
    line2Panier3.appendChild(line2PPDepart3);

    //div type siege (eco/premiere)
    let line2PDepart3 = document.createElement('div');
    line2PDepart3.className = "rectanglecolone"
    line2Panier3.appendChild(line2PDepart3);

    let pTypeTrain = document.createElement('p');
    line2PDepart3.appendChild(pTypeTrain);

    if (classButtonAdd == classPremiere) {
        pTypeTrain.textContent = "Première";
    }
    else {
        pTypeTrain.textContent = "Economique";
    }


    if (compteurPanier == 0) {
        buttonPanier = document.getElementById("panier");
        compteurBillet = document.createElement('p');
        compteurBillet.className = "compteurPanier"
        buttonPanier.appendChild(compteurBillet);
    }
    compteurPanier++;
    compteurBillet.textContent = compteurPanier;
    

    console.log("compteur:" + compteurPanier);


    //prix total
    prixTot = prixTot + priceTicketsInt;





    let prixTotalPanier = document.getElementById("totalPanier");


    prixTotalPanier.textContent = prixTot + " €";





    billetAPayer.push(idTickets, cityFromTickets, nameFromTickets, cityToTickets, nameToTickets, priceTickets, dateTickets, departureTimeTickets); /*input gare de depart*/
    sessionStorage.setItem("billetsListes", billetAPayer);
    sessionStorage.setItem("nbrBillets", compteurPanier);
    sessionStorage.setItem("prixTotal", prixTot);
    console.log(billetAPayer);
}




//let abc = tablInfoTickets[tablInfoTickets.indexOf(5380)]