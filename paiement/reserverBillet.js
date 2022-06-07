//formualire info perso
let surnameUsers = document.getElementById("namePaiement");
let firstnameUsers = document.getElementById("prenomPaiement");
let mailUsers = document.getElementById("courreilPaiement");

//formualaires adresse
let numberAdressUser = document.getElementById("numRue");
let streetAdressUser = document.getElementById("nomRue");
let cityAdressUser = document.getElementById("ville");
let postcodeAdressUser = document.getElementById("cp");

let buttonPayerFinalFinal = document.getElementById("paiementFinalValidation");

buttonPayerFinalFinal.addEventListener("click", () => {/*bouton continuer creation 3 cliqué*/


//popup confirmation
let popupfinal = document.getElementById("popupconfirm");



// let tableauidreserv=[1387,634,635];

//verif console value variable
// console.log(surnameUsers.value)
// console.log(firstnameUsers.value)
// console.log(mailUsers.value)
// console.log(numberAdressUser.value)
// console.log(streetAdressUser.value)
// console.log(cityAdressUser.value)
// console.log(postcodeAdressUser.value)


fetch('http://gigondas:1111/sprietna/ihm/tp4/book', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        info: {
            address: {
                number: numberAdressUser.value,
                street: streetAdressUser.value,
                city: cityAdressUser.value,
                postcode:postcodeAdressUser.value
            },
            surname: surnameUsers.value,
            firstname: firstnameUsers.value,
            mail: mailUsers.value,
            user: userConnect
        },
        schedules: tableauidreserv//tableau contenant les id des trains
    })
}).then(response => {
    if (response.ok) {
        console.log(userConnect);
        popupfinal.style.display="flex";
        return response.json()
    } else {
        throw response
    }
}).then(tickets => {
    console.log(tickets)
}).catch(error => {
    error.text().then(errorMessage => {
        console.log('Request failed : ' + errorMessage);
    });
});

})