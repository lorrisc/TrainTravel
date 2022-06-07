let boutonprofil2 = document.getElementById("profil"); /*boutton profil*/
let boutondeconnexion2 = document.getElementById("deconnexion"); /*boutton deconnexion*/

let boutonseconnecter2 = document.getElementById("connexion"); /*boutton se connecter*/
let boutonsinscire2 = document.getElementById("inscription"); /*boutton sinscrire*/


var idconnecte = sessionStorage.getItem("idconnecte");
console.log(idconnecte)


boutonprofil2.style.display = "none";
boutondeconnexion2.style.display = "none"

boutonseconnecter2.style.display = "flex";
boutonsinscire2.style.display = "flex";

if ((idconnecte!=null) && (idconnecte!=0)){
    console.log("L'utilisateur : " +idconnecte+" est connecté")

    boutonprofil2.style.display = "flex";
    boutondeconnexion2.style.display = "flex"

    boutonseconnecter2.style.display = "none";
    boutonsinscire2.style.display = "none";
}


/*Selon où l'utilisateur s'est connecté, besoin de faire cela*/
boutondeconnexion2.addEventListener("click", () => {/*bouton de déconnexion au compte cliqué*/

    fetch('http://gigondas:1111/sprietna/ihm/tp4/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: idconnecte,/*variable stockant l'id connecté à déconnecter*/
        })
    })
        .then((response) => {
            if (response.ok) {
                console.log("compte deconnecté")
                numeroidentifiantconnect = 0;/*id de la personne connecté est 0 car plus personne est connecté*/

                let boutonprofil = document.getElementById("profil"); /*boutton profil*/
                let boutondeconnexion = document.getElementById("deconnexion"); /*boutton deconnexion*/

                let boutonseconnecter = document.getElementById("connexion"); /*boutton se connecter*/
                let boutonsinscire = document.getElementById("inscription"); /*boutton sinscrire*/

                /*Redéfinition de l'apparence des boutons suite à la déconnexion*/
                boutonprofil.style.display = "none";
                boutondeconnexion.style.display = "none"

                boutonseconnecter.style.display = "flex";
                boutonsinscire.style.display = "flex";
            } else {
                throw response;
            }
        })
        .then((userId) => {
            console.log(userId);
            idconnecte=0;
            sessionStorage.setItem("idconnecte", idconnecte);

        })
        .catch((error) => {
            error.text().then((errorMessage) => {
                console.log('Request Failed : ' + errorMessage);
            });
        });
})