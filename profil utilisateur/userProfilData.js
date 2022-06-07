/*JS PERMETTANT L'AFFICHAGE DES REELS INFOS DE L'UTILISATEUR CONNECTE*/

//user data
var surnameUserLog = sessionStorage.getItem("surnameUser");
var firstnameUserLog = sessionStorage.getItem("firstname");
var mailUserLog = sessionStorage.getItem("emailUser");

var numberAdresseLog = sessionStorage.getItem("numberAdresse");
var rueAdresseLog = sessionStorage.getItem("rueAdresse");
var villeAdresseLog = sessionStorage.getItem("villeAdresse");
var cpAdresseLog = sessionStorage.getItem("cpAdresse");

//selection des paragraphes
let courrielUser = document.getElementById("courrielUser"); /*paragraphe mail*/
let nameUser = document.getElementById("nameUser"); /*paragraphe nom prenom*/
let postalAdress = document.getElementById("postalAdress"); /*paragraphe nom prenom*/

//importation des informations dans les paragraphes (visible sur site)
courrielUser.textContent = mailUserLog;
nameUser.textContent = surnameUserLog + " "+firstnameUserLog;
postalAdress.textContent = numberAdresseLog+" "+rueAdresseLog+" "+villeAdresseLog+" "+cpAdresseLog

