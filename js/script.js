//PALINDROMA
//-Chiedere all'utente di inserire una parola
//-Dichiaro una funzione
//-Capovolgo la parola
//- if per controllare se le due parole sono palindrome

const userWord = prompt('Inerisci una parola').trim();
console.log(`La parola inserita è: ${userWord}`);

function reverseWord(userWord){
    let result = '';
    
    for(i = userWord.length - 1; i >= 0 ; i--){
        result += userWord[i];
       
    }

    return result;
}

const reversedWord = reverseWord(userWord);
console.log(`La parola al contrario é: ${reversedWord}`);

if(userWord === reversedWord){

    console.log('La due parole sono palindrome');
}else{
    console.log('Le due parole non sono palindrome');
}
