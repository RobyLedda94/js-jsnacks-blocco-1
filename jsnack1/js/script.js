// SNACK 1:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// // messaggio di debug
// alert('Questa e una lista di invitati')


// Creazione array con lista nomi degli invitati

const usersList = ['antonio', 'gianluca', 'roberta', 'roberto', 'alessandro'];
console.log(usersList);


// Tramite prompt chiedo all'utente di inserire il suo nome

let userName = prompt('Inserisci il tuo nome');
console.log(userName);



// Creo la cpndizionale di controllo per stabilire che il nome sia presente nell'array

let foundName = false;

for (let i = 0; i < usersList.length; i++){
    if (usersList[i] === userName){
        foundName = true;
    }
}

if (foundName === true){
    console.log('Il tuo nome e sulla lista prego');
}

else {
    console.log('Il tuo nome non è sulla lista arrivederci');
}