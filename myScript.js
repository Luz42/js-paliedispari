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


Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/


//funzione che verifica l'uguaglianza degli

// chiedere la parola

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

let word = prompt('Inserire una parola')

const result = isPalindromeWord(word)

console.log(result)

switch (result) {

    case true:
        console.log('E\' palindroma');
        break;

    case false:
        console.log('Non è palindroma');
        break;

    case null:
        console.log('Non è una parola');
        break;
}


