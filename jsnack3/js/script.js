// SNACK 3:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero..


// chiedo all'utente di inserire un numero a 4 cifre

let number = prompt('Inserisci un numero a 4 cifre');
console.log(number);


// definiamo varibile per la domma delle cifre

let somma = 0;
// console.log(somma);

// ciclo di controllo per la cifra inserita

for (let i = 0; i < number.length; i++){

    // converto la cifra inserita in numero intero e la sommo
   somma += parseInt(number[i]);
   
}

// visualizzo il risultato in console
console.log ('la somma del numero' +  number + 'e:' + somma);