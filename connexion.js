let boutonconnexion = document.getElementById("connexionpopup"); /*boutton connexion*/
let boutondeconnexion = document.getElementById("deconnexion"); /*boutton déconnexion*/

let valeurinputemail = 0; /*variable identifiant utilisateur*/
let valeurinputpassword = 0; /*variable mot de passe utilisateur*/
let numeroidentifiantconnect = 0;   /*id compte connecté*/


/*CONNEXION*/
boutonconnexion.addEventListener("click", () => {/*bouton de connexion au compte cliqué*/
    valeurinputemail = document.getElementById("emaillogin").value; /*login value*/
    valeurinputpassword = document.getElementById("passwordlogin").value; /*password value*/



    fetch('http://gigondas:1111/sprietna/ihm/tp4/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail: valeurinputemail,
            password: valeurinputpassword,
        })
    })
        .then((response) => {
            if (response.ok) {
                let boutonprofil = document.getElementById("profil"); /*boutton profil*/
                let boutondeconnexion = document.getElementById("deconnexion"); /*boutton deconnexion*/

                let boutonseconnecter = document.getElementById("connexion"); /*boutton se connecter*/
                let boutonsinscire = document.getElementById("inscription"); /*boutton sinscrire*/

                /*Redéfinition des apparences des boutons (utilisateur connecté donc les boutons changent)*/
                boutonprofil.style.display = "flex";
                boutondeconnexion.style.display = "flex"

                boutonseconnecter.style.display = "none";
                boutonsinscire.style.display = "none";

                documentgeneral.style.display = "none"
                loginpopup.style.display = "none";

                return response.text();
            } else {
                throw response;
            }
        })
        .then((userId) => {
            console.log("Connexion effecuté, idCompte : " + userId);
            numeroidentifiantconnect = userId;
            sessionStorage.setItem("idconnecte", numeroidentifiantconnect);


            //recuperation des utilisateurs pour stockers ses informations et les affichées sur son profil
            fetch('http://gigondas:1111/sprietna/ihm/tp4/users').then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw response
                }
            }).then(schedules => {
                console.log(schedules)
                console.log(schedules[3])
                let nombreUser = 0
                for (let i = 0; numeroidentifiantconnect!= schedules[i].id; i++) {
                    nombreUser = i
                }
                nombreUser++;
                let surnameUser =schedules[nombreUser].surname;   /*id compte connecté*/
                let firstname = schedules[nombreUser].firstname;   /*id compte connecté*/
                let emailUser = schedules[nombreUser].mail;   /*id compte connecté*/
                sessionStorage.setItem("surnameUser", surnameUser);
                sessionStorage.setItem("firstname", firstname);
                sessionStorage.setItem("emailUser", emailUser);
                //idem info utilisateur adresse postale
                let numberAdresse = schedules[nombreUser].address.number;   /*id compte connecté*/
                let rueAdresse = schedules[nombreUser].address.street;   /*id compte connecté*/
                let villeAdresse = schedules[nombreUser].address.city;;   /*id compte connecté*/
                let cpAdresse = schedules[nombreUser].address.postcode;;   /*id compte connecté*/
                sessionStorage.setItem("numberAdresse", numberAdresse);
                sessionStorage.setItem("rueAdresse", rueAdresse);
                sessionStorage.setItem("villeAdresse", villeAdresse);
                sessionStorage.setItem("cpAdresse", cpAdresse);
            }).catch(error => {
                    console.log('Request failed : ' + errorMessage);
            });

        })
        .catch((error) => {
            error.text().then((errorMessage) => {
                console.log('Request Failed : ' + errorMessage);

                let loginfail = document.getElementById("loginnonetabli"); /*informations que la connexion est refusé*/
                let popuplog = document.getElementById("flottantlogin"); /*selection popup de connexion pour redéfinition hauteur*/
                loginfail.style.display = "flex";/*information à l'utilisateur que les saisies sont invalides*/
                popuplog.style.height = "470px";/*redéfinition de la hauteur suite au nouveau message apparu */
            });
        });
})



/*DECONNEXION*/
boutondeconnexion.addEventListener("click", () => {/*bouton de déconnexion au compte cliqué*/

    fetch('http://gigondas:1111/sprietna/ihm/tp4/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: numeroidentifiantconnect,/*variable stockant l'id connecté à déconnecter*/
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
            numeroidentifiantconnect = 0;
            sessionStorage.setItem("idconnecte", numeroidentifiantconnect);


        })
        .catch((error) => {
            error.text().then((errorMessage) => {
                console.log('Request Failed : ' + errorMessage);
            });
        });
})

