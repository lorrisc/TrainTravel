let boutonconnexion = document.getElementById("connexionPaiement"); /*boutton connexion*/

let valeurinputemail = 0; /*variable identifiant utilisateur*/
let valeurinputpassword = 0; /*variable mot de passe utilisateur*/

let userConnect = 0;

/*CONNEXION*/
boutonconnexion.addEventListener("click", () => {/*bouton de connexion au compte cliqué*/
    valeurinputemail = document.getElementById("emailLogInPaiement").value; /*login value*/
    valeurinputpassword = document.getElementById("passLogInPaiement").value; /*password value*/


    let messageLogInFail = document.getElementById("loginFail"); /*message login fail*/
    let messageLogInOK = document.getElementById("loginOK"); /*message login ok*/
    messageLogInOK.style.display = "none";
    messageLogInFail.style.display = "none";


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
                let messageLogInOK = document.getElementById("loginOK"); /*message login ok*/
                let messageLogInFail = document.getElementById("loginFail"); /*message login fail*/

                messageLogInOK.style.display = "flex";
                messageLogInFail.style.display = "none";

                userConnect = 1;

                return response.text();
            } else {
                throw response;
            }
        })
        .then((userId) => {
            console.log("Connexion effecuté, idCompte : " + userId);
            userConnect = userId;

        })
        
        .catch((error) => {
            error.text().then((errorMessage) => {
                console.log('Request Failed : ' + errorMessage);

                let messageLogInFail = document.getElementById("loginFail"); /*message login fail*/
                let messageLogInOK = document.getElementById("loginOK"); /*message login ok*/

                messageLogInOK.style.display = "none";
                messageLogInFail.style.display = "flex";
            });
        });
})