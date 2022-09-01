console.log('JS-OK')

/*
Palindroma

Chiedere all’utente di inserire una parola

Creare una funzione per capire se la parola inserita è palindroma

chiedere la parola

togliere gli spazi prima e dopo

verificare che sia una parola

    typof

allora trasformo la stringa in un array

se la lunghezza dell'array è divisibile per 2

    array.lenght % 2 ===0

allora divido l'array in due parti uguali

    .split("")/splice()

inverto la seconda metà con

    array.reverse()

se le lettere presenti nel primo array sono presenti nel secondo arrary

    creo una funzione che mi permette di ciclare il contenuto degli array dove:

    array1[i] === array2 [i]

allora avremo un RETURN true

abbiamo stabilito che la parola è palindroma
*/










//ESERCIZIO 1

//CREATA funzione per verificare de un testo è palindromo o meno

function isPalindromeWord(word){

// togliere gli spazi prima e dopo

let onlyWord = word.trim()


// verificare che sia una parola

if (isNaN(onlyWord)){

        //console.log(onlyWord)

        // allora trasformo la stringa in un array

        const arrayWord = onlyWord.split("");
        
        //console.log(arrayWord)

        // allora divido l'array in due parti uguali

        const middleIndex = Math.ceil(arrayWord.length / 2);

        const firstHalf = arrayWord.splice(0, middleIndex);

                // inverto la seconda metà

        const secondHalf = arrayWord.splice(-middleIndex).reverse();

        //console.log(firstHalf); 
        //console.log(secondHalf);

        for(let i = 0; i < secondHalf.length; i++){

            //creo una funzione che mi permette di ciclare il contenuto degli array
            // abbiamo stabilito se la parola è palindroma
            if(firstHalf[i] === secondHalf[i]){

                //console.log('è palindromo')
                return true        
            
            }
            else{
            
                //console.log('non è palindromo')
                return false
            
            }
        }
    }
    else{
    
        return null
}
}
//FINE FUNZIONE

//ESERCIZIO 1

// chiedere la parola

let word = prompt('Inserire una parola')

//utilizzare la funzione
const result = isPalindromeWord(word)

console.log(result)

//attribuire un'esecuzione a ciascun risultato (true, false, null)

switch (result) {

    case true:
        alert('E\' palindroma');
        break;

    case false:
        alert('Non è palindroma');
        break;

    case null:
        alert('Non è una parola');
        break;
}

//FINE ESERCIZIO 1












//ESERCIZIO 2

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto
*/

//FUNZIONE 1 per ottenere un nnumero random da 1 a 5
function getRandomNumber(min, max) {
    const range = max - min + 1
    
    const randomNumber = Math.floor(Math.random() * range) + min;
    
    return randomNumber

}

//FUNZIONE 2 per verificare se un numero è pari o dispari

function isOddOrEven(verifyNumber) {

    if (verifyNumber % 2 === 0){

        return 'Pari'

    }
    else
        return 'Dispari'

}


//chiedi all'utente se sceglie pari o dispari
//chiedi all'utente un numero compreso tra 1 e 5
let resultHTML = document.getElementById('result')
const startButton = document.getElementById('startButton')

console.log(startButton)

startButton.addEventListener('click', function(){

    resultHTML.innerHTML = ''
    const userChoice = document.getElementById('inputGroupSelect01').value
    const userNumber = document.getElementById('inputGroupSelect02').value
    console.log('hai scelto ' + userChoice)
    console.log('questo è il tuo numero ' + parseInt(userNumber))

    const computerNumber = getRandomNumber(1, 5)
    console.log('questo è il numero del pc ' + computerNumber)

    const sum = parseInt(computerNumber) + parseInt(userNumber)
    console.log('questa è la somma ' + sum)

    const result = (isOddOrEven(sum))

    let final = (result === userChoice) ? resultHTML.innerHTML += 'HAI VINTO' : resultHTML.innerHTML += 'HAI PERSO';

})

//const userNumber = parent(prompt('scegli un numero da 1 a 5'))

//creo una funzione che genera un numero random da 1 a 5




//creo una funzione che stabilisce se un numero è pari o dispari



//chiedo un numero che deve essere compreso tra 1 e 5 e deve essere un numero

//sommo il valore inserito dall'utente con il numero generato dalla funzione

//verifico se il numero è pari o dispari 

//dichiaro il vincitore

