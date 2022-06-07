/* FICHIER JS PERMETTANT LA GESTION DE LA PAGE USERPROFIL - GESTION DE LA NAV BAR ET DONC GESTION DES ARTICLES AFFICHÉ*/


/*PICK ID OF NAVBAR*/
let accueilbutton = document.getElementById("acutelopen"); /*Aperçu du compte*/
let abonnementbutton = document.getElementById("buttonabonnement"); /*Abonnement*/
let editprofilbutton = document.getElementById("editprofilbutton"); /*Modifier le profil*/
let passwordchangebutton = document.getElementById("buttonpassword"); /*Changer le mot de passe*/
let notificationbutton = document.getElementById("buttonnotification"); /*Paramètre de notifications*/
let confidentialitebutton = document.getElementById("buttonconfidentialite"); /*Paramètre de confidentialité*/
let recubutton = document.getElementById("buttonrecu"); /*Reçu*/
/*PICK ID OF NAVBAR*/

/*PICK ID OF BUTTON IN ARTICLE*/
let editbuttoninpage = document.getElementById("editprofilbuttonbas"); /*boutton modifier le profil(article:aperçu du compte)*/
let savebuttoninpage = document.getElementById("saveprofil"); /*boutton appliquer modification (article:modifier le profil)*/
let appliqpassbuttoninpage = document.getElementById("appliqpass"); /*bouton applique le mot de passe (article:changer le mot de passe)*/
let cancelpassbuttoninpage = document.getElementById("exception"); /*bouton annuler le mot de passe (article:changer le mot de passe)*/
/*PICK ID OF BUTTON IN ARTICLE*/

/*RECUPERATION DES ARTICLES*/
let dAccueil = document.getElementById("apercuducompte"); /*aperçu du compte*/
let dAbonnement = document.getElementById("abonnement"); /*abonnement*/
let dEdit = document.getElementById("editprofil");/*modifier le profil*/
let dpassword = document.getElementById("editpassword");/*changer le mot de passe*/
let dnotification = document.getElementById("notificationparts");/*paramètre de notifications*/
let dconfidentialite = document.getElementById("notificationparts");/*paramètre de confidentialite*/
let drecu = document.getElementById("recupart");/*reçus*/
/*RECUPERATION DES ARTICLES*/

/*RECUPERATION DES TEXTE DE LA NAVBAR*/
var texteaperçu = document.getElementById("papercu");
var texteabonnement = document.getElementById("pabonnement");
var texteeditoprofil = document.getElementById("peditprofil");
var textepassword = document.getElementById("ppassword");
var textenotification = document.getElementById("pnotification");
var texteconfidentialite = document.getElementById("pconfidentialite");
var texterecu = document.getElementById("precu");
/*RECUPERATION DES TEXTE DE LA NAVBAR*/

/*ACTION => CLIQUE*/
/*BOUTON IN PAGE*/
editbuttoninpage.addEventListener("click", () => {/*clique sur bouton: modifier le profil; article:aperçu du compte*/
    dAccueil.style.display = "none";
    dEdit.style.display = "block";

    texteeditoprofil.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})

saveprofil.addEventListener("click", () => {/*clique sur bouton: sauvegarder; article: modifier le profil*/
    dAccueil.style.display = "block";
    dEdit.style.display = "none";

    texteaperçu.setAttribute("style", "color:black;text-decoration: underline");

    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
appliqpassbuttoninpage.addEventListener("click", () => {/*clique sur bouton: appliquer; article: modifier le mot de passe*/
    dAccueil.style.display = "block";
    dpassword.style.display = "none";

    texteaperçu.setAttribute("style", "color:black;text-decoration: underline");

    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
cancelpassbuttoninpage.addEventListener("click", () => {/*clique sur bouton: annuler; article: modifier le mot de passe*/
    dAccueil.style.display = "block";
    dpassword.style.display = "none";

    texteaperçu.setAttribute("style", "color:black;text-decoration: underline");

    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
/*BOUTON IN PAGE*/
/*BOUTON NAVBAR*/
accueilbutton.addEventListener("click", () => {/*clique navbar: aperçu du compte*/
    dAbonnement.style.display = "none";
    dpassword.style.display = "none";
    dnotification.style.display = "none";
    dconfidentialite.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "none";
    dAccueil.style.display = "block";

    texteaperçu.setAttribute("style", "color:black;text-decoration: underline");

    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})

abonnementbutton.addEventListener("click", () => {/*clique navbar: abonnement*/
    dAccueil.style.display = "none";
    dpassword.style.display = "none";
    dnotification.style.display = "none";
    dconfidentialite.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "none";
    dAbonnement.style.display = "block";

    texteabonnement.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
editprofilbutton.addEventListener("click", () => {/*clique navbar: modifier le profil*/
    dAccueil.style.display = "none";
    dAbonnement.style.display = "none";
    dpassword.style.display = "none";
    dnotification.style.display = "none";
    dconfidentialite.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "block";

    texteeditoprofil.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})

passwordchangebutton.addEventListener("click", () => {/*clique navbar: changer le mot de passe*/
    dAccueil.style.display = "none";
    dAbonnement.style.display = "none";
    dnotification.style.display = "none";
    dconfidentialite.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "none";
    dpassword.style.display = "block";

    textepassword.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
notificationbutton.addEventListener("click", () => {/*clique navbar: paramètre de notification*/
    dAccueil.style.display = "none";
    dAbonnement.style.display = "none";
    dpassword.style.display = "none";
    dconfidentialite.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "none";
    dnotification.style.display = "block";

    textenotification.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
confidentialitebutton.addEventListener("click", () => {/*clique navbar: paramètre de confidentialité*/
    dAccueil.style.display = "none";
    dAbonnement.style.display = "none";
    dpassword.style.display = "none";
    dnotification.style.display = "none";
    drecu.style.display = "none";
    dEdit.style.display = "none";
    dconfidentialite.style.display = "block";

    texteconfidentialite.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texterecu.setAttribute("style", "color:#818181;text-decoration: none");
})
recubutton.addEventListener("click", () => {/*clique navbar: reçus*/
    dAccueil.style.display = "none";
    dAbonnement.style.display = "none";
    dpassword.style.display = "none";
    dnotification.style.display = "none";
    dconfidentialite.style.display = "none";
    dEdit.style.display = "none";
    drecu.style.display = "block";

    texterecu.setAttribute("style", "color:black;text-decoration:underline");

    texteaperçu.setAttribute("style", "color:#818181;text-decoration: none");
    texteabonnement.setAttribute("style", "color:#818181;text-decoration: none");
    texteeditoprofil.setAttribute("style", "color:#818181;text-decoration: none");
    textepassword.setAttribute("style", "color:#818181;text-decoration: none");
    textenotification.setAttribute("style", "color:#818181;text-decoration: none");
    texteconfidentialite.setAttribute("style", "color:#818181;text-decoration: none");
})
/*BOUTON NAVBAR*/