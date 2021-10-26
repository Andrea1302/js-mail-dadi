// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.




// Creo array con le mail che potranno accedere 

const listaMail = ["io@gmail.com", "andrea@gmail.com", "scarpandrea.1996@hotmail.com"];

let festaJs = document.getElementById("festa");




// Chiedo all utente di inserire la sua mail 
let inserisciMail = prompt("inserisci qui la tua mail");
// Se la sua mail corrisponde a una mail presente nella array allora stamperò l esito positivo dell accesso 
for ( i=0; i < listaMail.length; i++ ) {
    if ( inserisciMail === listaMail[i] ){
        console.log("ci sei");
        festaJs.innerHTML= `Complimenti sei inserito nella lista !`

        // Se la sua mail non combacia con quella presente nella array allora stamperò l esito negativo dell accesso 
        
    } else {
        console.log("non ci sei");
        festaJs.innerHTML=`Purtroppo non sei inserito nella lista`
    }
}
