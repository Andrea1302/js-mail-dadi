// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.
const risultatoFinale = document.getElementById("quiJs");

// Inserire numero random utente 
let numUtente = Math.floor(Math.random()*6) + 1;
console.log(numUtente);
// far stabilire un numero random al pc 
let numPc = Math.floor(Math.random()*6) + 1;
console.log(numPc);
// se numero utene > numero pc vince, altrimenti perde 

if ( numUtente < numPc ) {
    risultatoFinale.innerHTML="Hai perso";
} else if ( numUtente === numPc) {   
    risultatoFinale.innerHTML="La partita termina con un pareggio";
} else {
    risultatoFinale.innerHTML="Hai vinto !";
}