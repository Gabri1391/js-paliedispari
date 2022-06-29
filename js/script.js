//PALINDROMA
//-Chiedere all'utente di inserire una parola
//-Dichiaro una funzione
//-Capovolgo la parola
//- if per controllare se le due parole sono palindrome



//------------------------------------------------------------------------------------------------------------------------------------------------------//


//PARI E DISPARI

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
//Dichiariamo chi ha vinto.

const evenOdd = prompt('Pari o Dispari?','Pari');
console.log(evenOdd);

const min = 1;
const max = 5;

//CHIEDIAMO IL NUMERO ALL'UTENTE
const userNumber = parseInt(prompt(`Scegli un numero compreso tra ${min} e ${max}`));
console.log(userNumber);


//FUNZIONE PER GENERARE UN NUMERO RANDOM ALLA CPU
function getCpuRandomNumber(){
    
    const cpuRandomNumber = Math.floor(Math.random() * (max + 1));

    return cpuRandomNumber;
}

 const cpuNumber = getCpuRandomNumber();
 console.log(cpuNumber);


 //SOMMA DEI DUE NUMERI
 const sum = userNumber + cpuNumber;
 console.log(sum);


 //FUNZIONE PER STABILIRE SE  LA SOMMA DEI DUE RISULTATI SIA PARI O DISPARI

 function isEven(number){
    let result;

    if(number % 2){
        result = false;
    }else{
        result = true;
    }


    return result;
 }

 const finalResult = isEven(sum); 
 console.log(finalResult);