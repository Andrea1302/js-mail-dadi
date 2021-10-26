// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.
const risultatoFinale = document.getElementById("quiJs");
const mioNumeroRandom = document.getElementById("mio_numero");
const numeroPcRandom = document.getElementById("numero_pc");

const bottoneNumber = document.getElementById("genera_mn");
const bottonePcNumber = document.getElementById("genera_pcn");
// Inserire numero random utente
bottoneNumber.addEventListener("click",

    function(){


    let numUtente = Math.floor(Math.random()*6) + 1;
    console.log(numUtente);
    mioNumeroRandom.innerHTML= `il tuo numero è: ${numUtente}`;;
    
    let numPc = Math.floor(Math.random()*6) + 1;
    console.log(numPc);
    numeroPcRandom.innerHTML=`il numero del pc è: ${numPc}`;
    if ( numUtente < numPc ) {
        risultatoFinale.innerHTML="Hai perso";
    } else if ( numUtente === numPc) {   
        risultatoFinale.innerHTML="La partita termina con un pareggio";
    } else {
        risultatoFinale.innerHTML="Hai vinto !";
    }
    }

)


// se numero utene > numero pc vince, altrimenti perde 

