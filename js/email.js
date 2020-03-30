// Cotrollo inserimento JS

console.log('JS è stato inserito correttamente');

/********** Esercizio 1 **********/

// Dati iniziali

var listEmail = ["michele@boolean.careers", "fabio@boolean.careers", "roberto@boolean.careers"];
var userEmail = prompt('Inserisci qui la tua E-mail : ');
var verifyEmail = false;
// Controllo E-mail

for (i = 0; i < listEmail.length; i++) {

    // Dichiarazione variabile di controllo
    var checkEmail =  listEmail[i]; 
    
    // Verifica uguaglianza E-mail 
    if (checkEmail == userEmail) {
       verifyEmail = true;
    } 
    
}

// Avviso 

if (verifyEmail == true) {
        document.getElementById('verifyEmail').innerHTML = 'Accesso consentito';
    } else {
        document.getElementById('verifyEmail').innerHTML = 'Accesso Negato';
}

// Stampa 

document.getElementById('userEmail').innerHTML = userEmail;
