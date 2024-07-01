// SNACK 2:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array


// messaggio di debug

// alert('riempiamo un array con i valori');

// creo un array vuoto

let numbers = [];
console.log(numbers);

// creo il ciclo per chiedere 6 numeri all'utente

for (let i = 0; i < 6; i++){

    let userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);

    // controllo se il numero e dispari
    if (userNumber % 2 !== 0){
        numbers.push(userNumber);
    }
}



