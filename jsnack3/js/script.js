// SNACK 3:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero..


// RECUPERO IL PULSANTE DAL DOM
document.getElementById('send-number').addEventListener('click', function (){
    // PRENDO IL VALORE DEL CAMPO INPUT
    let num = document.getElementById('number').value;

    // VERIFICO CHE IL NUMERO INDERITO SIA DI QUATTRO CIFRE
    if (num.length === 4){
            // DICHIARO LA VARIABILE CHE CONTIENE LA SOMMA DELLE CIFRE
            let somma = 0;

            for (let i = 0;i < num.length; i++){
                somma += parseInt(num[i]);
            }
            console.log(somma);

    }
    

});